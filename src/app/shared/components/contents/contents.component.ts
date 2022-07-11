import { Component, Input } from '@angular/core';
import { Content } from 'src/app/core/interfaces/ContentInterface';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
})
export class ContentsComponent {
  @Input() contents: Content[] = [];
  @Input() loading: boolean = false;
}
