import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
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
  isUploading = false;
  constructor(private httpClient: HttpClient) { }
 
  async removeItem(index: number){
    this.tabActivite.splice(index,1);
    return new Promise( resolve => this.saveActiviteToServer() );
  
  }

  editItem(index: number, nouveauNom: string, nouvelDescription: string){
    this.tabActivite[index].nom = nouveauNom;
    this.tabActivite[index].description = nouvelDescription;
  }
  toogleActive(index: number){
    this.tabActivite[index].acti =  !(this.tabActivite[index].acti);
    this.saveActiviteToServer();   
  }
  saveActiviteToServer() {
    this.isUploading=true;
    this.httpClient
      .put('https://basetp6.firebaseio.com/activite.json', this.tabActivite)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          this.isUploading = false;
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

loadActiviteToServer() {
  this.httpClient
    .get<any>('https://basetp6.firebaseio.com/activite.json')
    .subscribe(
      (response) => {
       this.tabActivite = response;
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}