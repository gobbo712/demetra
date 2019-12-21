import { Injectable } from '@angular/core';
import { Item } from '../classes/item';
import { uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private catalogo:Item[] = [];

  constructor() {
    // TODO load real data
  	for (var i = 0; i <= 10; i++) {
	  	this.catalogo.unshift(new Item('I am the mock item'+i, i));
  	}
  }

  public totalItems():number{
  	return this.catalogo.length;
  }

  public getCatalogo():Item[]{
  	return this.catalogo;
  }

  public filtrarCatalogo(searchTerm):Item[]{
    return this.catalogo.filter(item => {
      return item.etiqueta.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  public cambiarCantidadItem(item:Item,cantidad:number){
    this.catalogo.find(element => element.compara(item)).cantidad = cantidad;
  }

  public guardarItem(item:Item){

    let i = this.catalogo.find(element => element.compara(item));

    if(i){
      i.update(item);
    }else{
      this.catalogo.push(item);
    }

    this.catalogo.sort((a,b) => {
        if ( a.etiqueta.toLowerCase() < b.etiqueta.toLowerCase() ){
          return -1;
        }
        if ( a.etiqueta.toLowerCase() > b.etiqueta.toLowerCase() ){
          return 1;
        }
        return 0;
    })
  }

  public borrarItem(item:Item){
    this.catalogo.splice( this.catalogo.indexOf(item), 1 );
  }

}
