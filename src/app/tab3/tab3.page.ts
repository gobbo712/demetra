import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Item } from '../classes/item';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public catalogo:Item[];

  constructor(public dataService:DataService) {}

  ngOnInit() {
    this.catalogo = this.dataService.filterCatalog('');
  }

}
