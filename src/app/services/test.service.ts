import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class testService {
  public units = new BehaviorSubject([]);
  //public pw = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjI0NzMzNzAxOSwidWlkIjoxMjIzNDMwMCwiaWFkIjoiMjAyMy0wMy0yN1QyMjozMDo1Ni4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6Mjk2NTA5NiwicmduIjoidXNlMSJ9.X2cGFOIh9E8t-G4d4fl5cHZCsgt5kp5iQxJG1IuTp_Q"
  //Device GO

  constructor(private _http: HttpClient) { }


  test(): Observable<any> {
    // Alternatively, use object literal notation (less readable for many headers):
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  /*  const data={
      "boardID":boardID
    }*/
    return this._https.get("http://34.46.61.74/test",  { headers: headers })

  }
}
