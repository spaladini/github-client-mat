import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { SocketHandlerService } from '../services/socket-handler.service';

@Component({
  selector: 'app-ws-test',
  templateUrl: './ws-test.component.html',
  styleUrls: ['./ws-test.component.css']
})
export class WsTestComponent implements OnInit {

  history: Array<string> = new Array();

  message: string;

  constructor(
    private socketHandler: SocketHandlerService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.socketHandler.connect();

    this.socketHandler.messages.subscribe(next => {
      console.log(next);
      this.history.push(next);
    }, err => {
      this.notifications.error('Error!', err);
    });
  }

  send() {
    this.socketHandler.send(this.message);
    this.message = null;
  }



}
