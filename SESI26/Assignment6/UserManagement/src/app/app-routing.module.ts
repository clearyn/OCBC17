import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersManagementComponent } from './users-management/users-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'usermanagement', pathMatch: 'full'},
  { path: 'usermanagement', component: UsersManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
