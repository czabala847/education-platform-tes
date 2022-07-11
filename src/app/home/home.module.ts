import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [HomeComponent, HeroComponent, CategoryListComponent],
  imports: [CommonModule, HomeRoutingModule, MaterialModule, SharedModule],
})
export class HomeModule {}
