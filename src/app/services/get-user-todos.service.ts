import { UserTodos } from './../interfaces/user-todos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserTodosService {
  userId;
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getUsersTodos(id) {
    this.userId = id;
    return this.http.get(this.todosUrl)
    .pipe(
      map((data: UserTodos[]) => data.filter(user => user.userId === this.userId )
      ),
    );
  }
}

