import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { EmoticonStoreComponent } from "./pages/emoticon-store/emoticon-store.component";

import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/core/search-page/search-page.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { CommunityPageComponent } from './pages/community/community-page/community-page.component';
import { CommunityPostComponent } from './pages/community/community-post/community-post.component';
import { EmoticonBundleViewComponent } from './pages/emoticon-store/emoticon-bundle-view/emoticon-bundle-view.component';
import { EmoticonItemViewComponent } from './pages/emoticon-store/emoticon-item-view/emoticon-item-view.component';
import { UserEmoticonComponent } from './pages/user/user-emoticon/user-emoticon.component';
import { CommunityCreateComponent } from './pages/community/community-create/community-create.component';
  
const routes: Routes = [
  // essential pages
  { path: 'home', component: HomePageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  
  // core pages
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'profile', component: UserProfileComponent },

  // community pages
  { path: 'community', component: CommunityPageComponent },
  { path: 'community/create', component: CommunityCreateComponent },
  { path: 'community/:community_id', component: CommunityPageComponent },
  { path: 'community/post/:post_id', component: CommunityPostComponent },

  // emoticon pages
  { path: 'store-emoticon', component: EmoticonStoreComponent },
  { path: 'store-emoticon/my-emoticons', component: UserEmoticonComponent},
  { path: 'store-emoticon/bundle/:bundle_id', component: EmoticonBundleViewComponent },
  { path: 'store-emoticon/emoticon/:emoticon_id', component: EmoticonItemViewComponent},
  
  {path: '', redirectTo: "/home", pathMatch: "full"},
  { path: '**', redirectTo:"/page-not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
