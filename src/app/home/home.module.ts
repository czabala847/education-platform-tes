import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ContentRecommendedComponent } from './components/content-recommended/content-recommended.component';
import { SearchContentComponent } from './components/search-content/search-content.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CategoryListComponent,
    ContentRecommendedComponent,
    SearchContentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class HomeModule {}
