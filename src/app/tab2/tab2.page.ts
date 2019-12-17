import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VentasService } from '../services/ventas.service';
import { DataService } from "../services/data.service";
import { Item } from '../classes/item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public inputText: string;

  constructor(public ventasService: VentasService, public dataService:DataService) {}
  
  agregarCarrito(item:Item){
  	this.ventasService.agregarCarrito(item);
  }

  agregarCatalogo(){

  }
}
