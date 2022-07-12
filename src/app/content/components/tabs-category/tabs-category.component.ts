import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/interfaces/CategoryInterface';

@Component({
  selector: 'app-tabs-category',
  templateUrl: './tabs-category.component.html',
  styleUrls: ['./tabs-category.component.scss'],
})
export class TabsCategoryComponent {
  @Input() categories: Category[] = [];
  @Input() category_id: number = 0;
}
