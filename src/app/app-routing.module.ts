import { CharacterComponent } from './pages/characters-pages/character/character.component';
import { LocationComponent } from './pages/location-page/location/location.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';

import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CharactersPagesComponent } from './pages/characters-pages/characters-pages.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'characters', component: CharactersPagesComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: 'characterAdd', component: ContactsPageComponent },
  { path: 'locations', component: LocationPageComponent },
  { path: 'location/:id', component: LocationComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
