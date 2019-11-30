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

  message : string = '';
  newItem : Item = new Item();
  itemList : Item[] = [];
  isUpdate : boolean = false;

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
    if(frm.valid){
      this.itemService.saveItem(this.newItem).subscribe(
        (data : Item)=>{
          this.message = 'Item Saved Successfully...!';
          this.getItemList();
        }
      )
    }
  }

  update(frm : NgForm) : void {
    if(frm.valid){
      this.itemService.updateItem(this.newItem).subscribe(
        (data : Item)=>{
          this.message = 'Item Updated Successfully...!';
          this.getItemList();
          this.isUpdate = false;
          this.newItem = new Item();
        }
      )
    }
  }

  edit(id : number) : void {
    
    this.itemService.getItemById(id).subscribe(
      (data : Item)=>{
        this.newItem = data;
        this.isUpdate = true;
      },
      (error)=>{

      }
    )
  }

  delete(id : number) : void{
    let confirmMsg = confirm("Are you sure want to delete Item?");
    if(confirmMsg){
      this.itemService.deleteItemById(id).subscribe(
        (data)=>{
          this.message = "Item Deleted With id : "+id;
          this.getItemList();
        }
      )
    }
  }
}
