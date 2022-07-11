import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ContentListComponent } from './pages/content-list/content-list.component';
import { TagsCategoryComponent } from './components/tags-category/tags-category.component';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';

@NgModule({
  declarations: [
    ContentListComponent,
    TagsCategoryComponent,
    ContentDetailComponent,
  ],
  imports: [CommonModule, ContentRoutingModule, SharedModule, MaterialModule],
})
export class ContentModule {}
