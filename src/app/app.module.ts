import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SampleComponent } from './sample/sample.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/core/home-page/home-page.component';
import { AboutPageComponent } from './pages/core/about-page/about-page.component';
import { CommunityPageComponent } from './pages/core/community-page/community-page.component';

// icons
import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CardListComponent } from './layout/card-list/card-list.component';
import { CardItemComponent } from "./components/items/card-item/card-item.component";
import { PageNotFoundComponent } from './pages/core/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent,
    CommunityPageComponent,
    CardListComponent,
    CardItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
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
