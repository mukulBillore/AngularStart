import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello angular by Mukul Billore ';
  userName:string ='';
  nameError:string ='';
  imageUrl= "../assets/blzimage.png"
  url="https://bridgelabz.com/";
  onClick($event: any){
    console.log("Image is clicked!",$event);
    window.open(this.url,"_blank");
  }

  onInput($event:any){
    console.log("Change event occured!",$event.data);
  const nameRegex=RegExp("^[A-Z]{1}[a-zA-Z\s]{2,}$");
    if(nameRegex.test(this.userName)){
     this.nameError="";
      return ;
    }
    this.nameError="Name is incorrect"
 }
 onSubmit($event:any){
   this.userName ="mukul";
 }

}

