import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { 
        path: 'todos', 
        loadComponent: () => import('./todo-list/todo-list.component').then(mod => mod.TodoListComponent), 
        // dependencies are injected into the component's constructor (and the dependencies of those dependencies, etc.)
        providers: [
            TodoService, 
            importProvidersFrom(HttpClientModule)
        ]
    },
    { path: '**', redirectTo: 'todos' }
];
