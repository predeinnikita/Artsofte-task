import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { CompaniesService } from '../companies.service';
import { ICompany } from '../models/Company';

import { Product, products } from '../products';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})

export class CompanyDetailsComponent implements OnInit {
  
  private route: ActivatedRoute;
  private companyService: CompaniesService;
  public company?: ICompany;
  private subscriber!:Subscription;

  constructor(route: ActivatedRoute,
    companyService: CompaniesService) {
    this.route = route;
    this.companyService = companyService;
  }

  ngOnInit(): void {
    this.getCompany()
  }
  // ngOnDestroy(){
  //   if (this.subscriber) {
  //       this.subscriber.unsubscribe()
  //   }
  // }

  getCompany():void {
    const id = Number(this.route.snapshot.paramMap.get('companyId'));
    this.subscriber = this.companyService.getCompany(id).subscribe(
      company => 
      {this.company = company;
      console.log(id, company);
      }
    );
  }
}