import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../../shared/models/breadcrumb.model';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService implements OnDestroy {
  private breadcrumbs: Breadcrumb[] = [];
  private unsubscribe = new Subject();

  get notEmptyBreadcrumbs(): Breadcrumb[] {
    return this.breadcrumbs.filter(breadcrumb => !!breadcrumb.label);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe),
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (!children.length) {
      return breadcrumbs;
    }

    children.forEach(child => {
      const routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL) {
        url += `/${routeURL}`;
      }

      if ('breadcrumb' in child.snapshot.data) {
        breadcrumbs.push({label: child.snapshot.data.breadcrumb, url});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    });

    return breadcrumbs;
  }

  setLastLabel(label: string) {
    this.breadcrumbs[this.breadcrumbs.length - 1].label = label;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
