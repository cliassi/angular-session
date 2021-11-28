import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: 'edit/:id', component: TodoFormComponent },
  { path: 'details/:id', component: TodoDetailsComponent },
];

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent, TodoDetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class TodoModule {}
