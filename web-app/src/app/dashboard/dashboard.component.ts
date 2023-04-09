import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  transactions: any[] = []

  constructor(private dashboardService: DashboardService){
    this.dashboardService.getTransactions().subscribe(
      (transactions) => {
        this.transactions = transactions as any[];
      } 
    )
  }

  status = false;
  addToggle() {
    this.status = !this.status;
  }

  deleteTransaction(transactionId: number){
    this.dashboardService.deleteTransaction(transactionId).subscribe(
      () => {
        const transactionIndex = this.transactions.findIndex((t) => t.id === transactionId)
        this.transactions.splice(transactionIndex, 1);
      }
    );
  }

}
