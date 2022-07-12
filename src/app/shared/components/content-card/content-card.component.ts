import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentViewedService } from 'src/app/core/services/content-viewed.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content!: Content;
  viewed: boolean = false;

  constructor(
    private contentViewedService: ContentViewedService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.content) {
      this.viewed = this.contentViewedService.searchViewed(this.content.id);
    }
  }

  openDialog(): void {
    this.dialog
      .open(DialogConfirmComponent, {
        data: `¿Quitar contenido de vistos?`,
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if (confirm) {
          this.contentViewedService.removeViewed(this.content.id);
          this.viewed = false;
        }
      });
  }
}
