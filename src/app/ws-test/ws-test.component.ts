import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { SocketHandlerService } from '../services/socket-handler.service';

@Component({
  selector: 'app-ws-test',
  templateUrl: './ws-test.component.html',
  styleUrls: ['./ws-test.component.css']
})
export class WsTestComponent implements OnInit, OnDestroy {

  history: Array<string> = new Array();

  message: string;

  subscription: Subscription;

  constructor(
    private socketHandler: SocketHandlerService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.socketHandler.connect();

    this.subscription = this.socketHandler.messages.subscribe(next => {
      console.log(next);
      this.history.push(next);
    }, err => {
      this.notifications.error('Error!', err);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  send() {
    this.socketHandler.send(this.message);
    this.message = null;
  }

  isOpen() {
    return this.socketHandler.isOpen();
  }

  disconnect() {
    this.socketHandler.disconnect();
  }

  connect() {
    this.socketHandler.connect();
  }

}
