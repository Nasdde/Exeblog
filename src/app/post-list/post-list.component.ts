import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() monTitle: string;
  @Input() maContent: string;
  @Input() dateMaj: string;
  @Input() nbrePoint: number;

  constructor() { }

  ngOnInit() {
  }
  loveIt() {
    this.nbrePoint = this.nbrePoint + 1;
    return this.nbrePoint;
  }
  dontLoveIt() {
    this.nbrePoint = this.nbrePoint - 1 ;
    return this.nbrePoint;
  }
  getColor() {
    if (this.nbrePoint > 0 ) {
      return 'green';
    } else if(this.nbrePoint < 0) {
      return 'red';
    }
  }

}
