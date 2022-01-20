import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../models/Company';
import { MatListItem, MatListModule } from '@angular/material/list'

import { products } from '../products';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  
  private companiesService: CompaniesService;
  public companies: ICompany[] = [];
  private subscriber: Subscription | undefined;

  constructor(companiesService: CompaniesService) { 
    this.companiesService = companiesService;
  }

  ngOnInit(): void {
    this.getCompanies();
  }


  // ngOnDestroy(){
  //   if (this.subscriber) {
  //       this.subscriber.unsubscribe();
  //   }
  // }

  getCompanies(){
    this.subscriber = this.companiesService.getCompanies()
      .subscribe((companies)=>{
            this.companies = companies;

      });
  }
}

