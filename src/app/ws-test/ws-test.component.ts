import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketHandlerService } from '../services/socket-handler.service';

@Component({
  selector: 'app-ws-test',
  templateUrl: './ws-test.component.html',
  styleUrls: ['./ws-test.component.css']
})
export class WsTestComponent implements OnInit, OnDestroy {

  msg: string;

  history: Array<string> = new Array<string>();

  private messagesSubscription: Subscription;

  constructor(
    private socketHandler: SocketHandlerService
  ) { }

  ngOnInit() {
    this.messagesSubscription = this.socketHandler.messages.subscribe(msg => {
      this.history.push(msg);
    });
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
  }

  isOpen() {
    return this.socketHandler.isOpen();
  }

  sendMsg() {
    this.socketHandler.send(this.msg);
    this.msg = null;
  }

  closeWs() {
    this.socketHandler.disconnect();
  }

  openWs() {
    this.socketHandler.connect();
  }

}
