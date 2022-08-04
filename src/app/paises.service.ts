import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  baseURL: string;

  constructor(private httpClient: HttpClient) { 
    this.baseURL = 'https://restcountries.com/v2/regionalbloc/eu';
  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any[]>(this.baseURL).toPromise();
  }
}
