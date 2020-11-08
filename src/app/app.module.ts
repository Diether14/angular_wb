import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SampleComponent } from './sample/sample.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';

// icons
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CardListComponent } from './layout/card-list/card-list.component';
import { CardItemComponent } from "./components/items/card-item/card-item.component";
import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';
import { EmoticonStoreComponent } from './pages/emoticon-store/emoticon-store.component';
import { SearchPageComponent } from './pages/core/search-page/search-page.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { CommunityPageComponent } from './pages/community/community-page/community-page.component';
import { CommunityPostComponent } from './pages/community/community-post/community-post.component';
import { UserRegisterComponent } from './pages/user/user-register/user-register.component';
import { StoreCardItemComponent } from './components/items/store-card-item/store-card-item.component';
import { StoreCardListComponent } from './layout/store-card-list/store-card-list.component';
import { EmoticonBundleViewComponent } from './pages/emoticon-store/emoticon-bundle-view/emoticon-bundle-view.component';
import { EmoticonItemViewComponent } from './pages/emoticon-store/emoticon-item-view/emoticon-item-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent,
    CardListComponent,
    CardItemComponent,
    PageNotFoundComponent,
    EmoticonStoreComponent,
    SearchPageComponent,
    UserProfileComponent,
    CommunityPageComponent,
    CommunityPostComponent,
    UserRegisterComponent,
    StoreCardItemComponent,
    StoreCardListComponent,
    EmoticonBundleViewComponent,
    EmoticonItemViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary){
    iconLibrary.addIcons(faBell, faSearch)
  }
}
