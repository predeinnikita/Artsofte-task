import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../models/Company';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    constructor(private companiesService: CompaniesService){}
    products = products;
    companies: Observable<ICompany[]> = new Observable<ICompany[]>();

    

    share() {
      window.alert('The product has been shared!');
    }
  
    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }

    getCompanies() {
        this.companies = this.companiesService.getCompanies();
    }

    ngOnInit(): void {
        this.getCompanies();
    }
  }