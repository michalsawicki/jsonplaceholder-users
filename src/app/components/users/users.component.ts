import { BehaviorSubject } from 'rxjs';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data$: BehaviorSubject<any>;

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.data$ = this.shared.data;
    console.log(this.data$);
  }

  postData(value) {
    this.shared.setUser(value);
  }

}
