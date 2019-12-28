import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { CatalogoService } from '../../services/catalogo.service';
import { Item } from '../../classes/item';
import { ItemPage } from '../../item/item.page';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  public filtro: string = "";
  public catalogo:Item[] = [];


  constructor(public catalogoService:CatalogoService, public modalController: ModalController) { }

  ngOnInit() {
    this.catalogo = this.catalogoService.getCatalogo();
  }

  filtrarLista() {
    this.catalogo = this.catalogoService.filtrarCatalogo(this.filtro);
  }

  masUno(item:Item){
    this.catalogoService.cambiarCantidadItem(item, item.cantidad + 1);
  }

  menosUno(item:Item){
    if (item.cantidad<=0) {
      this.catalogoService.cambiarCantidadItem(item, 0);
    }else{
      this.catalogoService.cambiarCantidadItem(item, item.cantidad - 1);
    }
  }

  nuevoItemModal() {
    this.modalController.create({
      component: ItemPage
    }).then(modal => {
      modal.present();
    });
  }
    
  editItemModal(item:Item, slidingItem){
    this.modalController.create({
      component: ItemPage,
      componentProps: {
        item: item
      }
    }).then(modal => {
      modal.present();
    });
    slidingItem.closeOpened();
  }

}
