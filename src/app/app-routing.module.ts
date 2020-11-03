import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';
import { CommunityPageComponent } from './pages/core/community-page/community-page.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { EmoticonStoreComponent } from "./pages/emoticon-store/emoticon-store.component";

import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/core/search-page/search-page.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  
  { path: 'about', component: AboutPageComponent },
  { path: 'community', component: CommunityPageComponent },
  { path: 'community/:community_id', component: CommunityPageComponent },
  { path: 'store-emoticon', component: EmoticonStoreComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'profile', component: UserProfileComponent },
  
  {path: '', redirectTo: "/home", pathMatch: "full"},
  { path: '**', redirectTo:"/page-not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
