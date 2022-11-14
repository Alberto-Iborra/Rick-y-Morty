import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersPagesComponent } from './pages/characters-pages/characters-pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { CharacterComponent } from './pages/characters-pages/character/character.component';
import { LocationComponent } from './pages/location-page/location/location.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    CharactersPagesComponent,
    HomePageComponent,
    GalleryComponent,
    ContactsPageComponent,
    PaginationComponent,
    HeaderComponent,
    FooterComponent,
    LocationPageComponent,
    CharacterComponent,
    LocationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
