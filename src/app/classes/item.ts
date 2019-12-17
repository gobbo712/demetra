export class Item {
	etiqueta:string;
	foto64:any;
	descripcion:string;
	meta:any;
	cantidad:number;

	constructor(etiqueta:string){
		this.etiqueta=etiqueta;
		this.foto64='';
		this.descripcion='';
		this.meta='';
		this.cantidad=1;
	}
}
