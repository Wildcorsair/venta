import { Component, Input } from '@angular/core';

import { Message } from '../../../interfaces/message.interface';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.sass']
})
export class MessageItemComponent {

  @Input('avatar') avatar: string;
  @Input('messages') messages: Message[];

  constructor() { }

}
