import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService extends ApiService {
  collectionName = 'todo';
}
