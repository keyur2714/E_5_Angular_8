import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {

  friendList : string[] = ["keyur","denish","vinit"];
  errorMessage : string = '';
  isUpdate : boolean = false;
  updateIdx : number = -1;
  cssClassName : string = 'success';
  friendName : string = 'dravid';

  constructor() { }

  ngOnInit() {
    this.friendList.push("hiren");
  }

  // addFriend(name : string):void{
  //   //alert("Hello Radhe Krishna...!"+name);
    
  //   this.errorMessage = '';
  //   if(this.friendList.indexOf(name) === -1){
  //     this.friendList.push(name);
  //   }else{
  //     this.errorMessage = name+' Already Exists.';
  //   }

    
  // }

  addFriend():void{
    //alert("Hello Radhe Krishna...!"+name);
    
    this.errorMessage = '';
    if(this.friendList.indexOf(this.friendName) === -1){
      this.friendList.push(this.friendName);
      this.friendName = '';
      this.errorMessage = "Friend Created Successfully.";
      this.cssClassName = 'success';
    }else{
      this.errorMessage = this.friendName+' Already Exists.';
      this.cssClassName = 'info';
    }

    
  }

  edit(idx : number) : void {
    //alert(idx);
    this.errorMessage = '';
    this.friendName = this.friendList[idx];
    this.isUpdate = true;
    this.updateIdx = idx;
  }

  updateFriend() : void {    
    this.errorMessage = '';
    if(this.friendList.indexOf(this.friendName) === -1){
      this.friendList[this.updateIdx] = this.friendName;
      this.friendName = '';
      this.errorMessage = "Friend List updated successfully.";
      this.cssClassName = 'info';
      this.updateIdx = -1;
      this.isUpdate = false;
    }else{
      this.errorMessage = this.friendName+' Already Exists.';
      this.cssClassName = 'warning';
    }
  }

  checkMandatory() : void {
    if(this.friendName === ''){
      this.errorMessage = 'Friend Name should not be Empty.';
      this.cssClassName = 'danger';
    }
  }
 
  delete(idx : number) : void {
   // alert(idx);
    let confirmMsg = confirm("Are you sure want to delete "+this.friendList[idx]+" from friend list?");
    alert(confirmMsg);
    if(confirmMsg){
      this.friendList.splice(idx,1);
      this.errorMessage = "Friend deleted successfully.";
      this.cssClassName = 'danger';
    }
  }
}
