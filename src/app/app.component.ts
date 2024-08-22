import { Component } from '@angular/core';
import { testService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-dockerized-app';
  constructor(private _testService : testService){
    this._testService.test().subscribe(response=>{
      console.log(response)
    })
  }
}
