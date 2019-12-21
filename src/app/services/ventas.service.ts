import { Injectable } from '@angular/core';
// import {AutoCompleteService} from 'ionic4-auto-complete';
// import {map} from 'rxjs/operators';
import {Item} from '../classes/item';
import {CatalogoService} from '../services/catalogo.service';

@Injectable({
  providedIn: 'root'})
export class VentasService {

  public catalogo: Item[] = [];

  public carrito: Item[] = [];

  constructor(private catalogoService:CatalogoService) {
    this.catalogo = catalogoService.getCatalogo();
  }

  // public agregar(){
  // 	this.carrito.unshift(new Item(this.inputText));
  //   this.inputText = '';
  // 	console.log();
  // }

  public agregarCarrito(item:Item){
    this.carrito.unshift(item);
  }

}