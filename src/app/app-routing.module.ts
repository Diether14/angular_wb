import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { EmoticonStoreComponent } from "./pages/emoticon-store/emoticon-store.component";
import { ChatPageComponent } from './pages/core/chat-page/chat-page.component'

import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';
import { SearchPageComponent } from './pages/core/search-page/search-page.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { CommunityPageComponent } from './pages/community/community-page/community-page.component';
import { CommunityPostComponent } from './pages/community/community-post/community-post.component';
import { EmoticonBundleViewComponent } from './pages/emoticon-store/emoticon-bundle-view/emoticon-bundle-view.component';
import { EmoticonItemViewComponent } from './pages/emoticon-store/emoticon-item-view/emoticon-item-view.component';
import { UserEmoticonComponent } from './pages/user/user-emoticon/user-emoticon.component';
import { CommunityCreateComponent } from './pages/community/community-create/community-create.component';
import { PrivaryPageComponent } from './pages/core/privary-page/privary-page.component';
import { CookiesStatementPageComponent } from './pages/core/cookies-statement-page/cookies-statement-page.component';
import { TermsPageComponent } from './pages/core/terms-page/terms-page.component';
import { CommunityGuidelinesPageComponent } from './pages/core/community-guidelines-page/community-guidelines-page.component';
import { UserLoginComponent } from './pages/user/user-login/user-login.component';
  
const routes: Routes = [
  // essential pages
  { path: 'home', component: HomePageComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  
  // core pages
  { path: 'about', component: AboutPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'privacy', component: PrivaryPageComponent },
  { path: 'cookies-policy', component: CookiesStatementPageComponent },
  { path: 'terms-and-conditions', component: TermsPageComponent },
  { path: 'community-guidelines', component: CommunityGuidelinesPageComponent },

  // community pages
  { path: 'community', component: CommunityPageComponent },
  { path: 'community/create', component: CommunityCreateComponent },
  { path: 'community/post/create', component: CommunityCreateComponent },
  { path: 'community/:community_id', component: CommunityPageComponent },
  { path: 'community/post/:post_id', component: CommunityPostComponent },

  // emoticon pages
  { path: 'store-emoticon', component: EmoticonStoreComponent },
  { path: 'store-emoticon/my-emoticons', component: UserEmoticonComponent},
  { path: 'store-emoticon/bundle/:bundle_id', component: EmoticonBundleViewComponent },
  { path: 'store-emoticon/emoticon/:emoticon_id', component: EmoticonItemViewComponent},
  //login
  { path: 'login', component: UserLoginComponent },
  
  {path: '', redirectTo: "/home", pathMatch: "full"},
  { path: '**', redirectTo:"/page-not-found", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
