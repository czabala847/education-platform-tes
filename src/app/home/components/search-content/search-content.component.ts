import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentService } from 'src/app/core/services/content.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {
  textEmpty: boolean = true;
  contents: Content[] = [];
  queryName = new FormControl('');

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    this.queryName.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value) => {
          const query: string = value || '';
          if (query.trim().length > 0) {
            this.textEmpty = false;
            return this.contentService.getByName(query);
          }
          this.contents = [];
          this.textEmpty = true;
          return of(null);
        })
      )
      .subscribe((contents) => {
        this.contents = contents || [];
      });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    const content: Content = event.option.value;
    if (content) {
      this.queryName.setValue(content.title);

      this.router.navigate(['content/', content.id]);
    }
  }
}
