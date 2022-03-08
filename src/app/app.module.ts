//app.module.ts :- Indicates that it is the type script file provides strong 
//                 type checking.


// core moduldes of angular 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


// when ever CLI is used to genrate the new components and services,it will 
// it will automatically update this file to import and add them here.   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// further using @NgModule decorator we provide additional metadata to specify 
// components ,the services ,the imports etc further decorators are used while 
// processing,instantiation and at runtime 
@NgModule({

  // components are added here ,Essentially the classes that has views ,they are components 
  // directives and pipes.
  declarations: [
    AppComponent
  ],

  // various imports are needed for Applocation can be added here 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  // Typically serves like http-services are added to providers 
  providers: [],

  //  the root component which is the main view of the application.Only the 
  //  root module  has the property it indecates the component that's going to be bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
