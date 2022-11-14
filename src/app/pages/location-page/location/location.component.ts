import { CharacterModel } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from 'src/app/models/models';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  url='';
  location: LocationModel ={
    id: 0,
    name: '',
    type: '',
    created: '',
    residents: [],
  };
  character: CharacterModel={
    id: 1,
    name: '',
    status: '',
    gender: '',
    image: '',
    species: '',
  }
  characters:any[]=[];
  residents:any[]=[];
  id!: number;
  // residents = this.location.residents
  constructor(private charactersService:CharactersService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{this.id = Number(params.get('id'))}
    )
    this.charactersService.getLocationById(this.id).subscribe((res: any)=>{
      console.log(res);
      this.location=res;
      console.log(this.location);

      this.residents.push(this.location.residents);
      console.log(this.residents[0]);
      for (let index = 0; index < this.residents[0].length; index++) {
        let resident = this.residents[0][index];
          this.charactersService.getCharacterByUrl(resident).subscribe((res)=>{
            console.log(res);
            this.character=res
            this.characters.push(this.character)
            console.log(this.characters);

          })

      }
    })
    console.log(this.residents);

  }



}
