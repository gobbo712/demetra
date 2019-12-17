import { Injectable } from '@angular/core';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  catalogo:Item[] = [];

  constructor() {
  	for (var i = 0; i <= 10; i++) {
	  	this.catalogo.unshift(this.mockItem(i));
  	}
  }

  mockItem(e):Item{
  	return new Item('I am the mock item'+e);
  }

  public totalItems():number{
  	return this.catalogo.length;
  }

  public items():Item[]{
  	return this.catalogo;
  }

}
