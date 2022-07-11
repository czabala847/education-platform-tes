import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Content } from 'src/app/core/interfaces/ContentInterface';
import { ContentService } from 'src/app/core/services/content.service';

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
    private router: Router
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
        } else {
          this.router.navigate(['404']);
        }
      });
  }
}
