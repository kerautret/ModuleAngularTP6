import {Router} from '@angular/router';


export class ActiviteService{

  objectifs = ["Travailler", "Dormir", "Faire du sport"];
 
  removeItem(index: number){
    this.objectifs.splice(index,1);
  }

  editItem(index: number, newVal: string){
    this.objectifs[index] = newVal;
  }
}