import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Contact} from '../interfaces/contact.interface';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  index(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`https://5c0a5f4b26902800135f6c0a.mockapi.io/api/v1/contacts`);
  }

}
