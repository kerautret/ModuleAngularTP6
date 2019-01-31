import { Component, OnInit } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

import { ActiviteService } from './services/activite.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ModuleAngularTP3';
  secondes: number;

  constructor(private activiteService: ActiviteService){
  }

  ngOnInit(){
    const counter = interval(2000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

//    const cpt = Observable.interval(1000);

  }
}
