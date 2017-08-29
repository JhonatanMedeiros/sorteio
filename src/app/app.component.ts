import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  listSorteados: boolean = false;

  index: number = 0;

  interval: any;

  lista: any  = [
    'Taciana Neris',
    'Mariana Costa',
    'Maria Madalena Da S. Antunes',
    'Ricardo Escaffa de Souza',
    'Paula Sanhudo da Silva',
    'Elisangela Pacheco da Silva',
    'Eduardo Ramalho',
    'Danielle Soares de Souza',
    'Rosani Lenzi',
    'Luciana Mendonça',
    'Dirce Garcia',
    'Simone Cezário',
    'Josane Mittmann'
  ];

  sorteados: any = [];

  nome: string = 'NOMES AQUI!';



  // x: any;

  ngOnInit() {
    this.sortear();
  }








  randomNames () {


    this.listSorteados = true;


    clearInterval(this.interval);

    this.sorteados.push(this.nome);
    this.lista.splice(this.index, 1);

    if(this.sorteados.length < 3){
      this.sortear();
    }





  }



  sortear() {

    let valor =0;
    this.interval = setInterval((() =>{
      this.index = Math.floor((Math.random() * this.lista.length));
      if(valor === this.index){
        this.index = Math.floor((Math.random() * this.lista.length));
      }
      valor = this.index;

      this.nome = this.lista[this.index];
    }), 100);



  }

}
