import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentDetail, PaymentDetailForm } from 'src/app/models/paymentdetail';
import { PaymentdetailService } from 'src/app/services/paymentdetail.service';
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-payment-detail-register',
  templateUrl: './payment-detail-register.component.html',
  styleUrls: ['./payment-detail-register.component.css']
})
export class PaymentDetailRegisterComponent implements OnInit {
  displayedColumns: string[] = ['cardOwnerName', 'cardNumber', 'expirationDate', 'action'];
  dataSource: MatTableDataSource<PaymentDetail> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private paymentService: PaymentdetailService) {
  }

  getUsers() {
    this.paymentService.getPaymentDetails().subscribe(dataSource => {
      this.dataSource = new MatTableDataSource(dataSource['result']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  };

  ngOnInit() {
    this.getUsers();
  }

  applyFilter(filterValue: KeyboardEvent | '' = '') {
    let input = filterValue ? (filterValue.target as HTMLInputElement).value : '';
    this.dataSource.filter = input.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}