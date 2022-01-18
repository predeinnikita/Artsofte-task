import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../models/Company';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input()company: ICompany | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
