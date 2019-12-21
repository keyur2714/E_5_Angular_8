import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ManageUserDataSource, ManageUserItem } from './manage-user-datasource';
import { User } from './user.model';
import { UserService } from '../service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();

  constructor(private userService : UserService,public dialog: MatDialog){}


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'mobileNo', 'city'];

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (users : User[])=>{
        this.dataSource.data = users;
      }
    )    
  }


  openDialog(id) : void{
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '250px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+ result);      
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;    
  }
}
