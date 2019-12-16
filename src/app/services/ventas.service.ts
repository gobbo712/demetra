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

  public inputText: string;

  constructor(catalogoService:CatalogoService) { }

  public agregar(){
  	this.carrito.unshift({
      descripcion:'',
      etiqueta:this.inputText,
      foto64:'',
      meta:''
    });
    this.inputText = '';
  	console.log('sin arg');
  }

}