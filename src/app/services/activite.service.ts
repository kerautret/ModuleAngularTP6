import {Router} from '@angular/router';


export class ActiviteService{

  tabActivite = [
    {
      nom : "Faire du sport",
      description: "avec du beau temps" 
    },
    {
      nom : "Travailler Angular",
      description: "pour être super fort" 
    },
    {
      nom : "Se promener",
      description: "à la mer..." 
    }

  ]

  removeItem(index: number){
    this.tabActivite.splice(index,1);
  }

  editItem(index: number, nouveauNom: string, nouvelDescription: string){
    this.tabActivite[index].nom = nouveauNom;
    this.tabActivite[index].description = nouvelDescription;
  }
}