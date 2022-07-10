import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/interfaces/CategoryInterface';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
