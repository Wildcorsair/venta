import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';
import { Contact} from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.sass'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.index().subscribe((response: Contact[]) => {
      if (response === undefined) {
        return;
      }

      this.contacts = response;
    });
  }

}
