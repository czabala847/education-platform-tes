import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/core/services/category.service';
import { ContentService } from 'src/app/core/services/content.service';

import { Category } from 'src/app/core/interfaces/CategoryInterface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  category_id: number = 0;
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          if (id) {
            this.category_id = id;
          }
          return this.contentService.getByCategory(this.category_id);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.categoryService
      .getAll()
      .subscribe((categories) => (this.categories = categories));
  }
}
