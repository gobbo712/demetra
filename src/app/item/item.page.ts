import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Item } from '../classes/item';
import {CatalogoService} from '../services/catalogo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  private item:Item;

  // public unique_id:any;
  // public etiqueta:string;
  // public foto64:any;
  // public notas:string;
  // public meta:any;
  // public cantidad:number;

  constructor(public modalController: ModalController, public catalogoService:CatalogoService, public navParams: NavParams) { }

  ngOnInit() {
  	if(this.navParams.data.item){
	  	let i:Item = this.navParams.data.item;
	  	this.item.unique_id = i.unique_id;
	  	this.item.etiqueta = i.etiqueta;
	  	this.item.foto64 = i.foto64;
	  	this.item.meta = i.meta;
	  	this.item.notas = i.notas;
	  	this.item.cantidad = i.cantidad;
  	}else{
	  	this.item = new Item('', 1);
  	}
  }

  dismissModal(){
  	this.modalController.dismiss();
  }

  guardarItem(){
  	this.catalogoService.guardarItem(this.item);
  	this.modalController.dismiss();
  }

  masUno(item:Item){
      this.item.cantidad = this.item.cantidad + 1;
  }

  menosUno(item:Item){
    if (this.item.cantidad<=0) {
      this.item.cantidad = 0;
    }else{
      this.item.cantidad = this.item.cantidad - 1;
    }
  }

}
