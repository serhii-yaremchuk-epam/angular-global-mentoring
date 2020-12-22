import { Component, OnInit, ChangeDetectionStrategy, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { Author } from '../../../shared/models/author.model';

@Component({
  selector: 'cp-form-authors',
  templateUrl: './form-authors.component.html',
  styleUrls: ['./form-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormAuthorsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: FormAuthorsComponent,
      multi: true
    }
  ]
})
export class FormAuthorsComponent implements ControlValueAccessor, Validator {
  @Input() all: Author[] = [];
  authors: Author[] = [];
  searchQuery = ''

  get listToSelect(): Author[] {
    const selectedIds = this.authors.map(author => author.id);
    return this.all.filter(author => !selectedIds.includes(author.id));
  }

  writeValue(value?: Author[]) {
    if (value && this.authors !== value) {
      this.authors = value;
    }
  }

  propagateChange(authors?: Author[]) {}
  registerOnChange(fn: () => void) {
    this.propagateChange = fn;
  }

  onTouched() {}
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  onChange(event: Event) {
    const id = (event.target as HTMLInputElement).value;
    const newItem = this.all.find(author => author.id === id) as Author;
    const newAuthors = this.authors.slice();
    newAuthors.push(newItem);
    this.authors = newAuthors;
    this.searchQuery = '';
    this.propagateChange(this.authors);
  }

  onRemove(id: string) {
    this.authors = (this.authors as Author[]).filter(author => author.id !== id);
    this.propagateChange(this.authors);
  }

  validate() {
    return (this.authors && this.authors.length) ? null : {
      authorsCount: 'Should be at least one author selected'
    };
  }

}
