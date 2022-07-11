import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentService } from 'src/app/core/services/content.service';

@Component({
  selector: 'app-content-recommended',
  templateUrl: './content-recommended.component.html',
  styleUrls: ['./content-recommended.component.scss'],
})
export class ContentRecommendedComponent implements OnInit {
  contents: Content[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getAll().subscribe((contents) => {
      this.contents = contents.slice(0, 4);
    });
  }
}
