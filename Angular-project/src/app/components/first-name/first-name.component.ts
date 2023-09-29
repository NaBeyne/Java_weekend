import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.scss']
})

export class FirstNameComponent {

  constructor(private http: HttpClient) {}

  name : string = ""
  data : any

  randomiseFirstName(): void {
    this.http.get<Response>('https://random-data-api.com/api/v2/users?response_type=json')
      .subscribe(data => {
        this.name = data.first_name
      });
  }
}

interface Response {
  first_name: string
}
