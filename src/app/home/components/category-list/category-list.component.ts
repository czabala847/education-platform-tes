import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/interfaces/CategoryInterface';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  @Input() categories: Category[] = [];
}
