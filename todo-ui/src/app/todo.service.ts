import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get('http://localhost:5083/todos/getall').pipe(
      tap(data => console.log(data))
    );
  }
}
