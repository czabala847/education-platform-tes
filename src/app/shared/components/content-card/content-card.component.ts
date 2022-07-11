import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentViewedService } from 'src/app/core/services/content-viewed.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content!: Content;
  viewed: boolean = false;

  constructor(private contentViewedService: ContentViewedService) {}

  ngOnInit(): void {
    if (this.content) {
      this.viewed = this.contentViewedService.searchViewed(this.content.id);
    }
  }

  openDialog() {}
}
