import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos');
  }

  public addTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  public updateTodo(todo: TodoModel): Observable<TodoModel> {
    return this.http.put<TodoModel>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
  }

  public removeTodo(todoId: number): Observable<TodoModel> {
    return this.http.delete<TodoModel>(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  }
}
