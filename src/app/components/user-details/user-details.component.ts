import { GetUserPostsService } from './../../services/get-user-posts.service';
import { GetUserTodosService } from './../../services/get-user-todos.service';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  userId;
  userData;
  show: number;
  post$: BehaviorSubject<any> = new BehaviorSubject(null);
  todo: BehaviorSubject<any> = new BehaviorSubject(null);
  todosSub$: Subscription;
  postsSub$: Subscription;
  dataSub$: Subscription;
  constructor(private route: ActivatedRoute,
              private shared: SharedService,
              private todos: GetUserTodosService,
              private posts: GetUserPostsService
              ) {
                this.show = 0;
                this.showMore();
               }

  ngOnInit(): void {
    this.getId();
    this.getData();
  }

  getData(): void {
    this.dataSub$ = this.shared.data.subscribe(users => {
      if (users) {
        if (users.length >= this.userId) {
          this.userData = users[this.userId - 1];
          this.getTodos();
          this.getPosts();
        }
      }
    });
  }

  getId(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
  }

  getTodos() {
    this.todosSub$ = this.todos.getUsersTodos(this.userId)
    .subscribe(todos => {
      this.todo.next(todos);
      console.log(this.todo.value);
    });
  }

  getPosts() {
    this.postsSub$ = this.posts.getUserPosts(this.userId)
    .subscribe(result => {
      this.post$.next(result);
    });

  }

  showMore() {
    this.show += 2;
  }

  ngOnDestroy() {
    this.dataSub$.unsubscribe();
  }
}
