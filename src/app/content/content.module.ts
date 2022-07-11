import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ContentListComponent } from './pages/content-list/content-list.component';
import { TagsCategoryComponent } from './components/tags-category/tags-category.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';

@NgModule({
  declarations: [ContentListComponent, TagsCategoryComponent, ContentsComponent, ContentCardComponent, ContentDetailComponent],
  imports: [CommonModule, ContentRoutingModule, SharedModule, MaterialModule],
})
export class ContentModule {}
