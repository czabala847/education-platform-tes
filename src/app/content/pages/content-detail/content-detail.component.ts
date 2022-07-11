import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentService } from 'src/app/core/services/content.service';
import { ContentViewedService } from 'src/app/core/services/content-viewed.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit {
  content: Content | null = null;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router,
    private contentViewedService: ContentViewedService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.contentService.getById(id);
        })
      )
      .subscribe((content) => {
        if (content !== null) {
          this.content = content[0];
          this.contentViewedService.addViewed(this.content.id);
        } else {
          this.router.navigate(['404']);
        }
      });
  }
}
