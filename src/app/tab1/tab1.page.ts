import { Component } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public searchTerm: string = "";
  public items: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }
}