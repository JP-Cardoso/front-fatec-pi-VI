import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  displayedColumns: Array<string> = ["nome", "dia", "valor"];
  dataSource!: Array<TValoes>;
  transacoes: Array<TValoes> = [
    { nome: "João Silva", data_hora: "2024-06-08 14:30:00", valor: 150.75 },
    { nome: "Maria Oliveira", data_hora: "2024-06-08 15:45:00", valor: 320.00 },
    { nome: "Carlos Pereira", data_hora: "2024-06-08 16:20:00", valor: 210.50 },
    { nome: "Ana Souza", data_hora: "2024-06-08 17:05:00", valor: 85.30 },
    { nome: "Pedro Santos", data_hora: "2024-06-08 18:15:00", valor: 500.00 }
  ];

  ngOnInit() {
    this.dataSource = this.transacoes.sort();   
  }
}

export type TValoes = {
  nome: string,
  data_hora: string,
  valor: number
}
