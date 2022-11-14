import { CharacterModel } from './../../../models/models';
import { CharactersService } from './../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: CharacterModel={
    id: 1,
    name: '',
    status: '',
    gender: '',
    image: '',
    species: '',
  }
  id!: number;
  constructor(private charactersService:CharactersService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params =>{this.id = Number(params.get('id'))}
    )
    this.charactersService.getCharacterById(this.id).subscribe((res: any)=>{
      console.log(res);
      this.character=res
    })

  }

}
