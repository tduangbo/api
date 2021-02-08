import { Component, OnInit } from '@angular/core';
import { Config, ShowService } from './show.service'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {
  error: any;
  headers: string[]=[];

  config: Config ={
  heroesUrl: " pp",
  textfile: 'pp',
  cards: []
    
  }

  constructor( private showService: ShowService) { }

  ngOnInit(): void {
    
  }

  getCardAPI(){
    this.showService.getConfig()
    .subscribe(
      (data: Config) => this.config = {...data}, //success path
      error => this.error = error// error path
    );

  }
  clear(){
    this.headers = []
  }

}
