import * as uuid from 'uuid';

export class Item {
	unique_id:any;
	etiqueta:string;
	foto64:any;
	notas:string;
	meta:any;
	cantidad:number;

	constructor(eti:string, cant:number = 1, foto64:any = '',notas:string = '',meta:any = ''){
		this.unique_id = uuid.v4();
		this.etiqueta = eti;
		this.foto64 = foto64;
		this.notas = notas;
		this.meta = meta;
		this.cantidad = cant;
		console.log('created item id: ' + this.unique_id);
	}

	public compara(item:Item):boolean{
		return this.unique_id == item.unique_id;
	}

	public update(item:Item){
		this.etiqueta = item.etiqueta;
		this.foto64 = item.foto64;
		this.notas = item.notas;
		this.meta = item.meta;
		this.cantidad = item.cantidad;
	}
}
