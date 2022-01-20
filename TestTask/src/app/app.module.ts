import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CompanyListComponent } from './company-list/company-list.component';
// import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { LayoutComponent } from './layout/layout.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanySortComponent } from './company-sort/company-sort.component'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { CompanyFilterComponent } from './company-filter/company-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: CompanyListComponent },
      { path: 'list', component: CompanyListComponent },
      { path: 'company/:companyId', component: CompanyDetailsComponent },
      { path: 'map', component: CompanyYandexMapComponent}
    ]),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CompanyListComponent,
    CompanyDetailsComponent,
    LayoutComponent,
    CompanyItemComponent,
    CompanyYandexMapComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }