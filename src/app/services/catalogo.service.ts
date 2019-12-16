import { Injectable } from '@angular/core';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  catalogo:Item[] = [];

  constructor() {
  	for (var i = 0; i <= 10; i++) {
	  	this.catalogo.unshift(this.mockItem('aaa'+i,i,i,i));
	}
  }

  mockItem(e,f,d,m):Item{
  	return {
  		etiqueta:e,
  		foto64:f,
  		descripcion:d,
  		meta:m
  	};
  }

  public totalItems():number{
  	return this.catalogo.length;
  }

  public items():Item[]{
  	return this.catalogo;
  }

}
