import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ContentComponent } from './pages/content/content.component';
import { ContentListComponent } from './pages/content-list/content-list.component';
import { TagsCategoryComponent } from './components/tags-category/tags-category.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ContentCardComponent } from './components/content-card/content-card.component';

@NgModule({
  declarations: [ContentComponent, ContentListComponent, TagsCategoryComponent, ContentsComponent, ContentCardComponent],
  imports: [CommonModule, ContentRoutingModule, SharedModule, MaterialModule],
})
export class ContentModule {}
