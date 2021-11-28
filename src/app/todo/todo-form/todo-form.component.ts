import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';
import { Todo } from 'src/app/@models/todo';
import { ApiService } from 'src/app/@services/api.service';
import { TodoService } from 'src/app/@services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {} as Todo;
  timeout = interval(1000);
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.todoService.post('', this.todo).then(
      (res) => {
        console.log(new Date());
        const subs = timer(3000, 3000).subscribe((n: any) => {
          console.log(new Date());
          this.router.navigate(['/todo']);
          subs.unsubscribe();
        });
        // this.router.navigate(['/todo']);
      },
      (error) => {
        alert('Failed');
      }
    );
  }
}
