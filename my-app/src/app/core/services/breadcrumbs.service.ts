import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Breadcrumb } from '../../shared/models/breadcrumb.model';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private breadcrumbs!: Breadcrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  get notEmptyBreadcrumbs() {
    return this.breadcrumbs.filter(breadcrumb => !!breadcrumb.label);
  }

  public createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    children.forEach(child => {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      if ('breadcrumb' in child.snapshot.data) {
        breadcrumbs.push({label: child.snapshot.data.breadcrumb, url});
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    });

    return breadcrumbs;
  }

  getLinkBreadCrumbs(): Breadcrumb[] {
    return this.notEmptyBreadcrumbs.slice(0, -1);
  }

  getLast() {
    return this.notEmptyBreadcrumbs[this.notEmptyBreadcrumbs.length - 1];
  }

  setLastLabel(label: string) {
    this.breadcrumbs[this.breadcrumbs.length - 1].label = label;
  }

}
