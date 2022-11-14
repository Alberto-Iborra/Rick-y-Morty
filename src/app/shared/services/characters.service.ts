import { CharacterModel } from './../../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  character: CharacterModel={
    id: 1,
    name: '',
    status: '',
    gender: '',
    image: '',
    species: '',
  }
  url!:string;
  counter!:string;
  constructor(private http:HttpClient) {

   }
   getCharacters(counter:number){
    return this.http.get('https://rickandmortyapi.com/api/character/?page='+counter)
  }
  getLocations(){
    return this.http.get('https://rickandmortyapi.com/api/location')
  }
  getCharacterById(id: number){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id)
  }
  getLocationById(id: number){
    return this.http.get('https://rickandmortyapi.com/api/location/'+id)
  }
  getCharacterByUrl(url: string){
    return this.http.get(url)
  }


}
