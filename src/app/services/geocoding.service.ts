import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const GEOCODE_URL = 'https://cors-anywhere.herokuapp.com/https://eu1.locationiq.com/v1/search.php?key=pk.12fcf0ac134d385a0bff62f143ae0eeb&format=json';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor(private httpClient: HttpClient) { }

  public geocode(address: string): Observable<any> {
    return this.httpClient.get(`${GEOCODE_URL}&q=${address}`);
  }
}
