import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  displayedColumns: string[] = ['title', 'firstName', 'lastName', 'role', 'email', 'id'];
  dataSource: User[] = [];

  constructor(
    private userService: UserService,
     public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(dataSource => this.dataSource = dataSource);
  };

  // openDialog() {
  //   const dialogRef = this.dialog.open(UserReactiveFormComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}