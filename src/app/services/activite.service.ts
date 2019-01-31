import {Router} from '@angular/router';


export class ActiviteService{

  tabActivite = [
    {
      nom : "Faire du sport",
      description: "avec du beau temps" ,
      active: true
    },
    {
      nom : "Travailler Angular",
      description: "pour être super fort" ,
      active: true

    },
    {
      nom : "Se promener",
      description: "à la mer..." ,
      active: true
    }

  ]

  removeItem(index: number){
    this.tabActivite.splice(index,1);
  }

  editItem(index: number, nouveauNom: string, nouvelDescription: string){
    this.tabActivite[index].nom = nouveauNom;
    this.tabActivite[index].description = nouvelDescription;
  }
  toogleActive(index: number){
    this.tabActivite[index].active =  !this.tabActivite[index].active;
  }

  
}