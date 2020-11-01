import { SharedService } from './../../services/shared.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  userId;
  userData;
  dataSub$: Subscription;
  constructor(private route: ActivatedRoute,
              private shared: SharedService) { }

  ngOnInit(): void {
    this.getId();
    this.getData();
  }

  getData(): void {
    this.dataSub$ = this.shared.data.subscribe(users => {
      if (users) {
        if (users.length > this.userId) {
          this.userData = users[this.userId];
          console.log(this.userData);
        }
      }
    });
  }

  getId(): void {
    this.userId = +this.route.snapshot.paramMap.get('id') - 1;
  }

  ngOnDestroy() {
    this.dataSub$.unsubscribe();
  }
}
