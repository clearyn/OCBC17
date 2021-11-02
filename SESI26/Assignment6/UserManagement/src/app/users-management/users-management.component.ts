import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserReactiveFormComponent } from '../user-reactive-form/user-reactive-form.component';
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

  getDeleteUserById(id: number){
    this.userService.deleteUserById(id).subscribe(
      (res) => {
        if (res.message) {
          alert(res.message);
          this.getUsers();
        }
      },
      (err) => {
          alert(err);
          this.getUsers();
      },
    );
    
  };

  openForm(isEdit: boolean = false, id?: number) {
    const dialogReactive = this.dialog.open(UserReactiveFormComponent, {data:{isEdit: isEdit, id: id}});
    
    dialogReactive.afterClosed().subscribe(result => {
      this.getUsers();
    });
  }

}