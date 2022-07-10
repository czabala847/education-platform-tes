import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent],
  imports: [CommonModule, HomeRoutingModule, FlexLayoutModule, MaterialModule],
})
export class HomeModule {}
