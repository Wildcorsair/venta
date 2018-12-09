import { Component, OnInit } from '@angular/core';

import { Message } from '../../interfaces/message.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.sass']
})
export class MessageListComponent implements OnInit {

  messages: Message[] = [];
  isEmpty = false;
  avatar: string;

  constructor(
      private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.contactClick.subscribe(({id, avatar}) => {
      this.loadMessages(id, avatar);
    });
  }

  loadMessages(id: number, avatar: string) {
    this.messageService.show(id).subscribe((response: Message[]) => {
      if (response === undefined) {
        return;
      }
      this.messages = response.sort(function (a, b) {
        if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) {
          return 1;
        }
        if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) {
          return -1;
        }
        return 0;
      });


      this.avatar = avatar;
    }, () => {
      this.isEmpty = true;
    });
  }

}
