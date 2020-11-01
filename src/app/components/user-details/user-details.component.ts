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
  post: BehaviorSubject<any> = new BehaviorSubject(null);
  todo: BehaviorSubject<any> = new BehaviorSubject(null);
  todosSub$: Subscription;
  postsSub$: Subscription;
  dataSub$: Subscription;
  constructor(private route: ActivatedRoute,
              private shared: SharedService,
              private todos: GetUserTodosService,
              private posts: GetUserPostsService
              ) { }

  ngOnInit(): void {
    this.getId();
    this.getData();
  }

  getData(): void {
    this.dataSub$ = this.shared.data.subscribe(users => {
      if (users) {
        if (users.length > this.userId) {
          this.userData = users[this.userId];
          this.getTodos();
          this.getPosts();
        }
      } else {
        console.log('no page found');
      }
    });
  }

  getId(): void {
    this.userId = +this.route.snapshot.paramMap.get('id') - 1;
  }

  getTodos() {
    this.todosSub$ = this.todos.getUsersTodos(this.userId)
    .subscribe(todos => {
      console.log();
      this.todo.next(todos);
    });
  }

  getPosts() {
    this.postsSub$ = this.posts.getUserPosts(this.userId)
    .subscribe(posts => {
      this.post.next(posts);
    });

  }

  ngOnDestroy() {
    this.dataSub$.unsubscribe();
  }
}
