import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-ui';
  todos$: Observable<any> = of([]);

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
