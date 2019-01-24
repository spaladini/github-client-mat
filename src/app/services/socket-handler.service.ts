import { EventEmitter, Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService {

  private ws: WebSocket;

  messages: Subject<any> = new Subject<any>();

  connected: EventEmitter<any> = new EventEmitter();

  disconnected: EventEmitter<any> = new EventEmitter();

  constructor(
    private notifications: NotificationsService,
  ) {
    console.log('SocketHandlerService init...');
    this.connect();
  }


  public connect() {

    if (this.isClosed() || this.isClosing()) {

      this.ws = new WebSocket(environment.ws_url);

      this.ws.onopen = (message: MessageEvent) => {
        console.log('Connection established');
        this.connected.emit();
        this.notifications.success('WebSocket', 'Connection established');
      };

      this.ws.onmessage = (message: MessageEvent) => {
        // console.log('<=== WS MSG', message);
        try {
          const wsmsg = JSON.parse(message.data);
          this.messages.next(wsmsg);
        } catch (err) {
          console.error('Error consuming message in WS.', message.data, err);
        }
      };

      this.ws.onclose = () => {
        // console.log('Connection closed');
        this.notifications.error('WebSocket', 'Connection closed');
        // Non faccio "complete()" perchè altrimenti, se viene riaperto il socket
        // il Subject è chiuso e non invia i messaggi. Uso un Emitter apposito
        //
        // this.messages.complete();
        this.disconnected.emit();
      };

      this.ws.onerror = (message: MessageEvent) => {
        console.error('Error in web socket communication', message);
        this.notifications.error('WebSocket', 'Communication error!');
        //
        // Gli errori nei messaggi non li propago
        // this.messages.error(message);
      };

    } else if (this.isOpen()) {
      throw new Error('Socket already open');
    }

  }

  send(message: any): void {
    if (this.isOpen()) {
      const msgAsString = JSON.stringify(message);
      // console.log('===> WS MSG', msgAsString);
      this.ws.send(msgAsString);
    } else {
      throw new Error('WebSocket closed!');
    }
  }


  disconnect(): void {
    this.ws.close();
    this.ws = null;
  }

  isOpen(): boolean {
    return this.ws && this.ws.readyState === WebSocket.OPEN;
  }

  isClosed(): boolean {
    return !this.ws || this.ws.readyState === WebSocket.CLOSED;
  }

  isConnecting(): boolean {
    return this.ws && this.ws.readyState === WebSocket.CONNECTING;
  }

  isClosing(): boolean {
    return this.ws && this.ws.readyState === WebSocket.CLOSING;
  }

  getStatus(): 'OPEN' | 'CLOSED' | 'CONNECTING' | 'CLOSING' | 'UNKNOWN' {
    if (this.ws) {
      switch (this.ws.readyState) {
        case WebSocket.OPEN: {
          return 'OPEN';
        }
        case WebSocket.CLOSED: {
          return 'CLOSED';
        }
        case WebSocket.CONNECTING: {
          return 'CONNECTING';
        }
        case WebSocket.CLOSING: {
          return 'CLOSING';
        }
        default: {
          return 'UNKNOWN';
        }
      }
    } else {
      return 'UNKNOWN';
    }
  }
}
