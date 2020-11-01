import { UserPosts } from '../interfaces/user-posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserPostsService {

  userId;
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getUserPosts(id) {
    this.userId = id;
    return this.http.get(this.postsUrl)
    .pipe(
      map((data: UserPosts[]) => data.filter(user => user.userId === this.userId )
      ),
    );
  }
}
