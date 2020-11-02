import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';
import { CommunityPageComponent } from './pages/core/community-page/community-page.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'community', component: CommunityPageComponent},
  {path: 'community/:community_id', component: CommunityPageComponent},
  {path: '', redirectTo: "/home", pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
