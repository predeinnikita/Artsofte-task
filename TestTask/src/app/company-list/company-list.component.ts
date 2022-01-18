import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../models/Company';
import { MatListItem, MatListModule } from '@angular/material/list'

import { products } from '../products';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
    constructor(
      private companiesService: CompaniesService
      ){}
    // products = products;
    companies: Observable<ICompany[]> = new Observable<ICompany[]>();
    // share() {
    //   window.alert('The product has been shared!');
    // }
  
    // onNotify() {
    //   window.alert('You will be notified when the product goes on sale');
    // }

    getCompanies() {
        this.companies = this.companiesService.getCompanies();
        
    }

    ngOnInit(): void {
        this.getCompanies();
    }
  }