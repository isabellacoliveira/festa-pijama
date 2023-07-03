import { Component } from '@angular/core';

interface Jogador {
  nome: string;
  cor: string;
}

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent {
  jogadores: Jogador[] = [
    {
      nome: 'Isabella',
      cor: 'azul'
    },
    {
      nome: 'Leticia',
      cor: 'marrom'
    },
    {
      nome: 'Nicolle',
      cor: 'amarelo'
    },
    {
      nome: 'Vitória',
      cor: 'azul'
    },
    {
      nome: 'Bárbara',
      cor: 'amarelo'
    },
    {
      nome: 'Luana',
      cor: 'vermelho'
    },
    {
      nome: 'Giovanna',
      cor: 'bege'
    },
    {
      nome: 'Giselle',
      cor: 'roxo'
    },
    {
      nome: 'Helena',
      cor: 'roxo'
    },
    {
      nome: 'Fernanda',
      cor: 'vermelho'
    },
    {
      nome: 'Julia',
      cor: 'verde'
    },
    {
      nome: 'Melissa',
      cor: 'marrom'
    },
    {
      nome: 'Ana Alice',
      cor: 'verde'
    },
  ];

  nomeSorteado: string | null = null;
  nomeDigitado: string = '';

  verificarNome() {
    const jogador = this.jogadores.find(j => j.nome === this.nomeDigitado);
    if (jogador) {
      this.nomeSorteado = jogador.nome;
    } else {
      alert('Nome não encontrado na lista.');
    }
  }

  getCorDoJogador(nome: string): string | undefined {
    const jogador = this.jogadores.find(j => j.nome === nome);
    return jogador?.cor;
  }
}


