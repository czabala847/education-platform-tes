import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ContentComponent } from './pages/content/content.component';
import { ContentListComponent } from './pages/content-list/content-list.component';

@NgModule({
  declarations: [ContentComponent, ContentListComponent],
  imports: [CommonModule, ContentRoutingModule, SharedModule, MaterialModule],
})
export class ContentModule {}
