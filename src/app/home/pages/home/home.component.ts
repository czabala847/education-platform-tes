import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from 'src/app/core/interfaces/CategoryInterface';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Navegar en la misma página
    this.route.fragment.subscribe((fragment) => {
      const section = document.querySelector('#' + fragment);
      if (section) section.scrollIntoView();
    });

    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
