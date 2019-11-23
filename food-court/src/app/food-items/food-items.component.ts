import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
  providers : [ItemService]
})
export class FoodItemsComponent implements OnInit {

  newItem : Item = new Item();
  itemList : Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() : void {
    this.itemService.getItems().subscribe(
      (data : Item[])=>{
        this.itemList = data;
      },
      (error)=>{

      }
    )
  }

  save(frm : NgForm) : void{
    
  }

  edit(id : number) : void {
    this.itemService.getItemById(id).subscribe(
      (data : Item)=>{
        this.newItem = data;
      },
      (error)=>{

      }
    )
  }
}
