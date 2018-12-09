import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../interfaces/message.interface';


@Injectable()
export class MessageService {

  @Output('contactClick') contactClick = new EventEmitter<{id: number, avatar: string}>();

  constructor(private http: HttpClient) {}

  show(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(`https://5c0a5f4b26902800135f6c0a.mockapi.io/api/v1/contacts/${id}/messages`);
  }

}