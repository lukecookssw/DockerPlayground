import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<any> = of([]);

  private todoService: TodoService;

  constructor(private todo: TodoService) {
    this.todoService = todo;
  }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
