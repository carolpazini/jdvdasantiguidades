import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Jogo das Antiguidades';
  turno = false;
  Finalizacao = false;
  chamada='';
  anuncioGanhador='';

  //Q é de quadrado
  Q1="";
  Q2="";
  Q3="";
  Q4="";
  Q5="";
  Q6="";
  Q7="";
  Q8="";
  Q9="";


//determinando se é ankh ou horus e as jogadas
  constructor() {
  }
  jogada(event) {
      if (event.target.innerHTML === "" && !this.Finalizacao) {
      if (this.turno) {
        event.target.innerHTML = "☥";
      } else {
        event.target.innerHTML = "𓂀";
      }
    }
    this.turno = !this.turno;
    this.JOGADOR();
    return event.target.innerHTML;

  }

  JOGADOR(){
   if(this.turno){
     this.chamada="ONE";
   }
   else{
  this.chamada="TWO";
   }
  }

  naoVazio(button) {
  if (button == "") {
    return false;
  } else {
    return true;
  }
}
//determinando as probabilidades
mesmoValor(um, dois, tres) {
  if ((um == dois && um == tres)) {
    return true;
  } else {
    return false;
  }
}
possibilidade(A, B, C){
  if (this.naoVazio(A) && this.naoVazio(B) && this.naoVazio(C)) {
    if (this.mesmoValor(A, B, C)) {
      return true;
    }
    return false;
  }
}
//verifica as probabilidades
verificaFinal(){
  if(this.Finalizacao){
     this.anuncioGanhador="Parece que alguém ganhou e quebrou a maldição!";
  }
  if (this.possibilidade(this.Q1, this.Q2, this.Q3)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q4, this.Q5, this.Q6)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q7, this.Q8, this.Q9)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q1, this.Q4, this.Q7)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q2, this.Q5, this.Q8)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q3, this.Q6, this.Q9)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q1, this.Q5, this.Q9)) {
      this.Finalizacao = true;
  }
  if (this.possibilidade(this.Q3, this.Q5, this.Q7)) {
      this.Finalizacao = true;
  }
}

// puxando o evento
  A1(event) {
    this.Q1 = this.jogada(event);
    this.verificaFinal();
  }
  A2(event) {
    this.Q2 = this.jogada(event);
    this.verificaFinal();
  } 
  A3(event) {
    this.Q3 = this.jogada(event);
    this.verificaFinal();
  } 

  B1(event) {
    this.Q4 = this.jogada(event);
    this.verificaFinal();
  } 
  B2(event) {
    this.Q5 = this.jogada(event);
    this.verificaFinal();
  } 
  B3(event) {
    this.Q6 = this.jogada(event);
    this.verificaFinal();
  } 

  C1(event) {
    this.Q7 = this.jogada(event);
    this.verificaFinal();
  } 
  C2(event) {
    this.Q8 = this.jogada(event);
    this.verificaFinal();
  } 
  C3(event) {
    this.Q9 = this.jogada(event);
    this.verificaFinal();
  }
}
