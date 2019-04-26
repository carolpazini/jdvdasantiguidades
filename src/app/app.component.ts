import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogododesespero';
  
  isZero = false;
  GameOver = false;
  title1='';
  title2='';
  title3='';
  PN=false;
  a1="";
  a2="";
  a3="";
  b1="";
  b2="";
  b3="";
  c1="";
  c2="";
  c3="";

  constructor() {
    // this.title1="ONE";
  }
  printZeroX(event) {
    console.log(this.GameOver);
    if (event.target.innerHTML === "" && !this.GameOver) {
      if (this.isZero) {
        event.target.innerHTML = "☥";
      } else {
        event.target.innerHTML = "𓂀";
      }
    }
    this.isZero = !this.isZero;
    this.PN=!this.PN;
    this.PLAYERPRINT();
    return event.target.innerHTML;

  }

  PLAYERPRINT(){
    if(this.isZero){
      this.title1="ONE";
    }
    else{
   this.title1="TWO";
    }
 
   }
 isNotBlank(button) {
 
   if (button == "") {
     return false;
   } else {
     return true;
   }
 }

 isRow(A, B, C){
  if (this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)) {
   
    if (this.isSameValue(A, B, C)) {

      return true;
    }

    return false;
  }
}


}
