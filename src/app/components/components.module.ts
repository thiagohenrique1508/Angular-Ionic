import { NavbarComponent } from './navbar/navbar.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [LoadingComponent, MonthlySalesChartComponent, UserCardComponent, NavbarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoadingComponent, MonthlySalesChartComponent, UserCardComponent, NavbarComponent
  ]
})
export class ComponentsModule { }
