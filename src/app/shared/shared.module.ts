import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { ImageRenderPipe } from './pipes/image-render.pipe';

@NgModule({
  declarations: [HeaderComponent, ImageRenderPipe],
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
  exports: [HeaderComponent, ImageRenderPipe],
})
export class SharedModule {}
