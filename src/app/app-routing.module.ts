import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'app/users', pathMatch: 'full' },
  { path: 'app/users', component: UsersComponent },
  { path: 'app/users/:id', component: UserDetailsComponent },
  { path: '**', redirectTo: 'app/users', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
