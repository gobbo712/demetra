import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Item } from '../../classes/item';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  public filtro: string = "";
  public catalogo:Item[] = [];

  constructor(public catalogoService:CatalogoService, public platform: Platform) { }

  ngOnInit() {
    this.catalogo = this.catalogoService.getCatalogo();
    this.platform.ready().then((readySource) => {
      console.log('Width: ' + this.platform.width());
      console.log('Height: ' + this.platform.height());
    });
  }

  filtrarLista() {
    this.catalogo = this.catalogoService.filtrarCatalogo(this.filtro);
  }

}
