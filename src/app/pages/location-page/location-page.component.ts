import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  locations: any[]=[]
  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getLocations().subscribe((res: any)=>{
      console.log(res);
      this.locations=res.results
    })
  }

}
