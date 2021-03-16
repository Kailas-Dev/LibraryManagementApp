import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksURL = "http://localhost:3000/books";
  registerBookURL = "http://localhost:3000/registerBook";

  constructor(private _http: HttpClient) { }

  getBookList(): Observable<any> {
    return this._http.get(this.booksURL);
  }
  registerBook(data): Observable<any> {
    return this._http.post(this.registerBookURL,data);
  }
  getRegBookList() {
    /* console.log("getRegEventList works fine"); */
    return this._http.get(this.registerBookURL);
  }
}
