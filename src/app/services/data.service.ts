import { Injectable } from '@angular/core';
import {Item} from '../classes/item';
import {Carrito} from '../classes/carrito';
//import {CatalogoService} from '../services/catalogo.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[] = [];

  constructor(/*catalogoService:CatalogoService*/private storage: Storage) {
    // this.items = [
    //   { title: "one" },
    //   { title: "two" },
    //   { title: "three" },
    //   { title: "four" },
    //   { title: "five" },
    //   { title: "six" }
    // ];
    // this.items = catalogoService.getCatalogo();

  }

  public getStock():Item[]{
    return null;
  }

  public getVentas():Carrito[]{
    return null;
  }

  public confirmarVenta(carrito:Carrito){

  }




  // public getCatalog():Item[]{
  //   return this.items;
  // }

  public filterCatalog(searchTerm) {
    return this.items.filter(item => {
      return item.etiqueta.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  saveItemInCatalog(item:Item){

  }
}
