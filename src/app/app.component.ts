import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular by Mukul Billore ';
  imageUrl= "E:\Angular\AngularStart\src\assets"
  url="https://bridgelabz.com/";
  onClick($event: any){
    console.log("Image is clicked!",$event);
    window.open(this.url,"_blank");
  }
}
