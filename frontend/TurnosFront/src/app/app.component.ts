import { Component } from '@angular/core';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { PersistentService } from './shared/services/persistent.service';
import { User } from './shared/class/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  
  title = 'Barbería Braz';

  constructor(private persistencia:PersistentService){

  }

  public isAdmin(){
    if(this.persistencia.exist("user")){
      let u = this.persistencia.get("user") as User;
      return u.isAdmin();
    }
    return false;
  }
}
