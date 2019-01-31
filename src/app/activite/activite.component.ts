import { Component, Input,  OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite.service';
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

  constructor(public myRouter: Router, public activiteService: ActiviteService) { }

  ngOnInit() {
  }
  

}
