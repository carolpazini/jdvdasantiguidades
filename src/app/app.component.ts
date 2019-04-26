import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isZero = false;
  GameOver = false;
  title1='';
  title2='';
  title3='';
  PN=false;
  Q1="";
  Q2="";
  Q3="";
  Q4="";
  Q5="";
  Q6="";
  Q7="";
  Q8="";
  Q9="";
  constructor() {
    // this.title1="ONE";
  }
  printZeroX(event) {
    console.log(this.GameOver);
    if (event.target.innerHTML === "" && !this.GameOver) {
      if (this.isZero) {
        event.target.innerHTML = "X";
      } else {
        event.target.innerHTML = "0";
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

isSameValue(one, two, three) {
  if ((one == two && one == three)) {
    return true;
  } else {
    return false;
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
isGAMEFINSISH(){
  if(this.GameOver){
    this.title2="GAME OVER";
    this.title3="YOU WIN THIS GAME ! CONGRATS...";
  }
  console.log(this.Q1 +"   "+this.Q2+"   "+this.Q3);
  if (this.isRow(this.Q1, this.Q2, this.Q3)) {
    
    this.GameOver = true;

  }
  if (this.isRow(this.Q4, this.Q5, this.Q6)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q7, this.Q8, this.Q9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q1, this.Q4, this.Q7)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q2, this.Q5, this.Q8)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q3, this.Q6, this.Q9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q1, this.Q5, this.Q9)) {
    this.GameOver = true;

  }
  if (this.isRow(this.Q3, this.Q5, this.Q7)) {
    this.GameOver = true;

  }
}

// puxando o evento
A1(event) {
  this.Q1 = this.printZeroX(event);
  this.isGAMEFINSISH();
}
A2(event) {
  this.Q2 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 
A3(event) {
  this.Q3 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 

B1(event) {
  this.Q4 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 
B2(event) {
  this.Q5 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 
B3(event) {
  this.Q6 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 

C1(event) {
  this.Q7 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 
C2(event) {
  this.Q8 = this.printZeroX(event);
  this.isGAMEFINSISH();
} 
C3(event) {
  this.Q9 = this.printZeroX(event);
  this.isGAMEFINSISH();
}
}
