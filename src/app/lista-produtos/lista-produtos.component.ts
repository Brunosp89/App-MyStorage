import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

interface Produtos {
  nome: string;
  descricao: string;
  preco: number;
}
@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  listaProdutos: Array<Produtos> = [
    {
      nome: 'Guidão Diablo 30cm',
      descricao: 'Feito em aço 3mm de espessura, 30cm de altura, 7/8 (22mm)',
      preco: 550,
    },
    {
      nome: 'Guidão ApeHanger 40cm',
      descricao: 'Feito em aço 3mm de espessura, 40cm de altura, 1" (25mm)',
      preco: 450,
    },
    {
      nome: 'SissyBar',
      descricao: 'Feito em aço inoxídavel e encosto coberto com Couro',
      preco: 750,
    },
  ];
  constructor() {}

  ngOnInit() {}
  compartilhar() {
    alert('O produto foi compartilhado');
  }
}
