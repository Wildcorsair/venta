import { Component, Input } from '@angular/core';

import { Contact} from '../../../interfaces/contact.interface';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.sass']
})
export class ContactItemComponent {

  @Input() contacts: Contact[];

  constructor(private messageService: MessageService) { }

  onContactItemClick(id: number, avatar: string) {
    this.messageService.contactClick.emit({id, avatar});
  }

}
