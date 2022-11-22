import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { ContentBoxComponent } from '../content-box/content-box.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  
})
export class LandingPageComponent implements OnInit {
  imgBox: Array<String> = [
    "https://bullsonwallstreet.com/wp-content/uploads/2019/09/Screen-Shot-2019-09-12-at-12.20.41-PM-1024x523.png",
    "https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  txtBox: Array<String> = [
    '"TripleA-Idee des Tages" is most of the time bs. The podcast hosts are of rightwing media "Welt", which is known for.... well nothing, nada, niente',
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quo nesciunt laborum ullam mollitia, vitae a porro! Nisi, illum impedit eligendi culpa, maiores neque, dolore odio tenetur corporis recusandae est."
  ];
  response: Array<string>;
  state: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  requestData(): void {
    const url = 'http://localhost:8000/api';
    
    this.http.get(url).subscribe(data => 
      console.log(data))
    }
  
  sendData(): void {
    const url = 'http://localhost:8000/api/markus';
    
    this.http.post(url, {"name": "richard", "age": 800});
    console.log("send data");
      

    
  }

}
