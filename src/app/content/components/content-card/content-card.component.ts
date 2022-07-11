import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/core/interfaces/ContentInterface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content!: Content;

  constructor() {}

  ngOnInit(): void {}
}