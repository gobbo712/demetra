import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  etiqueta:string;
  foto64:any;
  descripcion:string;
  meta:any;
  cantidad:number;

  constructor(dataService:DataService) { }

  ngOnInit() {
  }

}
