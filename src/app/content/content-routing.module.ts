import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from './pages/content-detail/content-detail.component';
import { ContentListComponent } from './pages/content-list/content-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContentListComponent,
  },
  {
    path: 'category',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'category/:id',
    component: ContentListComponent,
  },
  {
    path: ':id',
    component: ContentDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
