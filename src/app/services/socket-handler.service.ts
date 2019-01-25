import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService {

  private ws: WebSocket;

  public messages: Subject<any> = new Subject<any>();

  constructor(
    private notifications: NotificationsService
  ) {
    this.connect();
  }

  connect() {
    this.ws = new WebSocket(environment.ws_url);

    this.ws.onopen = () => {
      console.log('Connessione stabilita!');
      this.notifications.success('Connessione stabilita');
    };

    this.ws.onerror = (err) => {
      console.error('Errore ricevuto', err);
      this.notifications.error('Errore di comunicazione');
    };

    this.ws.onclose = (close) => {
      console.log('WS chiuso!');
      this.notifications.error('Connessione chiusa');
    };

    this.ws.onmessage = (msg: MessageEvent) => {
      // console.log('<<= ' + msg.data);
      this.messages.next(msg.data);
    };

  }

  send(msg: string) {
    this.ws.send(msg);
    // console.log('=>> ' + msg);
  }

  isOpen(): boolean {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  disconnect() {
    this.ws.close();
  }



}
