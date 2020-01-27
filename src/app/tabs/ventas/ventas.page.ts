import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Item } from '../../classes/item';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {

  public filtro: string = "";
  public catalogo:Item[] = [];
  public slideOpts = {
    direction: "vertical",
    freeMomentum: "true",
  };

  constructor(public catalogoService:CatalogoService) { }

  ngOnInit() {
    this.catalogo = this.catalogoService.getCatalogo();
  }

  filtrarLista() {
    this.catalogo = this.catalogoService.filtrarCatalogo(this.filtro);
  }


// "{
//           'direction'='vertical', 'freeMomentum' = 'true'
//       }"

}
