import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/core/interfaces/CategoryInterface';

@Component({
  selector: 'app-tags-category',
  templateUrl: './tags-category.component.html',
  styleUrls: ['./tags-category.component.scss'],
})
export class TagsCategoryComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Input() category_id: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
