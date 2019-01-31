import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class ActiviteService{

  tabActivite = [
    {
      nom : "Faire du sport",
      description: "avec du beau temps" ,
      acti: true
    },
    {
      nom : "Travailler Angular",
      description: "pour être super fort" ,
      acti: true

    },
    {
      nom : "Se promener",
      description: "à la mer..." ,
      acti: false
    }

  ]
  
  constructor(private httpClient: HttpClient) { }

  removeItem(index: number){
    this.tabActivite.splice(index,1);
  }

  editItem(index: number, nouveauNom: string, nouvelDescription: string){
    this.tabActivite[index].nom = nouveauNom;
    this.tabActivite[index].description = nouvelDescription;
  }
  toogleActive(index: number){
    this.tabActivite[index].acti =  !(this.tabActivite[index].acti);
   

  }


}