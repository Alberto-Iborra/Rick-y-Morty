import { CharacterModel } from './../../models/models';
import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-pages',
  templateUrl: './characters-pages.component.html',
  styleUrls: ['./characters-pages.component.scss']
})
export class CharactersPagesComponent implements OnInit {
  characters:any[]=[];
  page:number=1;
  id!:number;
  character: CharacterModel={
    id: 1,
    name: '',
    status: '',
    gender: '',
    image: '',
    species: '',
  }
  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.change(1)
  }
  change(page: number){
    this.charactersService.getCharacters(page).subscribe((res: any)=>{
      console.log(res);
      this.characters=res.results
    })
  }

}
