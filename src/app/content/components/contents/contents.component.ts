import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/core/interfaces/ContentInterface';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent implements OnInit {
  @Input() contents: Content[] = [];

  constructor() {}

  ngOnInit(): void {}
}
