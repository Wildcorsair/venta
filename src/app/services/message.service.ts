import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../interfaces/message.interface';


@Injectable()
export class MessageService {

  @Output('contactClick') contactClick = new EventEmitter<{id: number, avatar: string}>();

  constructor(
    @Inject('Config') private config,
    private http: HttpClient
  ) {}

  /**
   * Returns list of messages by contact identifier.
   *
   * @return Observable<Message[]>
   */
  show(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.config.apiUrl}/contacts/${id}/messages`);
  }

}