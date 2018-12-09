import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import {Contact} from '../interfaces/contact.interface';

@Injectable()
export class ContactService {

  constructor(
    @Inject('Config') private config,
    private http: HttpClient
  ) {}

  /**
   * Returns list of contacts.
   *
   * @return Observable<Contact[]>
   */
  index(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.config.apiUrl}/contacts`);
  }

}
