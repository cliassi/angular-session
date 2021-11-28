import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from 'src/app/@models/todo';
import { TodoService } from 'src/app/@services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Subject<Todo[]> = new Subject();

  firstname: string = '';
  lastname: string = '';
  subcription: any;

  constructor(private todoService: TodoService) {
    console.log(this.todoService.collectionName);
    this.subcription = this.todos.subscribe((todos: Todo[]) => {});
  }
  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.todoService.get('').then((todos: any) => {
      this.todos.next(todos);
    });
  }

  toggleDone(todo: Todo) {
    todo.done = !todo.done;
    this.todoService.put('/' + todo.id.toString(), todo).then((res) => {
      this.reload();
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.delete('/' + todo.id.toString()).then((res: any) => {
      this.reload();
    });
  }
  updateTodo(todo: Todo) {}
}
