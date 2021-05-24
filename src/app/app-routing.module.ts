import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './site/pages/home/home.component';
import { RegistroComponent } from './site/pages/registro/registro.component';
import { NewsDetailComponent } from './site/pages/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'noticias/:id',
    component: NewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
