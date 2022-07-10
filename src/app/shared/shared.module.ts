import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { ImageRenderPipe } from './pipes/image-render.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, ImageRenderPipe, FooterComponent],
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
  exports: [HeaderComponent, FooterComponent, ImageRenderPipe],
})
export class SharedModule {}
