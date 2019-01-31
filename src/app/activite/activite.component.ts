import { Component, Input,  OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';
import {interval } from 'rxjs';

import {Router} from '@angular/router';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {
  @Input() nomActivite: string="";
  @Input() numActivite: number=0;
  @Input() descriptionActivite: string="";
  @Input() estActif: boolean=true;
  secondes: number;

  constructor(public myRouter: Router, public activiteService: ActiviteService) { }

  toogle()
 {
   this.estActif= !this.estActif;
  this.activiteService.toogleActive(this.numActivite);
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
    }

  }
