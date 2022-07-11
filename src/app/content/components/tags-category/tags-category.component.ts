import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/interfaces/CategoryInterface';

@Component({
  selector: 'app-tags-category',
  templateUrl: './tags-category.component.html',
  styleUrls: ['./tags-category.component.scss'],
})
export class TagsCategoryComponent {
  @Input() categories: Category[] = [];
  @Input() category_id: number = 0;
}
