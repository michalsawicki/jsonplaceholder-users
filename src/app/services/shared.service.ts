import { GetUsersService } from './get-users.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  users$;
  user;
  data: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private getUsers: GetUsersService) {
    this.users$ = this.getUsers.getUsers().subscribe(result => {
      this.data.next(result);
    });
   }

  getUser() {
    return this.user;
  }

  setPost(value) {
    this.user = value;
    console.log(this.user);
  }
}
