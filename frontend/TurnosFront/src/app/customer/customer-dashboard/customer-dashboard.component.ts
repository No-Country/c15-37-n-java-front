import { Component } from '@angular/core';
import { Model } from 'src/app/shared/class/model';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {

  turno: Model = new Model({});

}
