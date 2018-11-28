import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timeClicks=[];
  numClick=0;
  paraVis=true;
  now = new Date();

  doStuff(){
    this.numClick++;
    this.now = new Date();
    this.timeClicks.push(this.now);
    

    if (this.paraVis){
      this.paraVis = false;
    } else {
      this.paraVis = true;
    }
  }


  getColor(){
    if (this.numClick >= 5){
      return "lightblue";
    } else {
      return "white";
    }
  }

}


