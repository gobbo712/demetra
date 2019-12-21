import { Injectable } from '@angular/core';
import {Item} from '../classes/item';
import {CatalogoService} from '../services/catalogo.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: Item[] = [];

  constructor(catalogoService:CatalogoService) {
    // this.items = [
    //   { title: "one" },
    //   { title: "two" },
    //   { title: "three" },
    //   { title: "four" },
    //   { title: "five" },
    //   { title: "six" }
    // ];
    this.items = catalogoService.getCatalogo();

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
