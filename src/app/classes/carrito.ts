import { Item } from './item';

export class Carrito {

	items:Item[];
	fecha:Date;

	public agrega(item:Item){ // IMPL
		if(item == undefined){
			return null;
		}
	}

	public totalCarrito():number{ // IMPL
		return 1;
	}
}
