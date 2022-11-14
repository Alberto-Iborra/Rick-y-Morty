import { CharactersService } from './../../services/characters.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // characters:any[]=[];
  @Input() globalCharacters: any =[]
  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    // this.charactersService.getCharacters().subscribe((res: any)=>{
    //   console.log(res);
    //   this.characters=res.results
    // })
  }

}
