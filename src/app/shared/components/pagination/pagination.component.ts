import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page: number=1
  @Output() emitCounter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  sum(){if(this.page<40){
    return this.page++ &&
    this.emitCounter.emit(this.page);
  }

  }
  rest(){if(this.page>1){
    return this.page-- &&
    this.emitCounter.emit(this.page);
  }
  }
  handleClick() {if(this.page>1){
    return this.page-- &&
    this.emitCounter.emit(this.page);
  }

}
}
