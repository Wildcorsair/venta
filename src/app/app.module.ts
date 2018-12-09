import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import Config from './app.config';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { ContactItemComponent } from './components/contact-list/contact-item/contact-item.component';
import { MessageItemComponent } from './components/message-list/message-item/message-item.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    MessageListComponent,
    ContactItemComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    {provide: 'Config', useValue: Config}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
