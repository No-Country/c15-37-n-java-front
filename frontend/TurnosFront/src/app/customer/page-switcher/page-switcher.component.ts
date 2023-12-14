import { Component } from '@angular/core';
import { CommandService } from '../command-service.service';


@Component({
  selector: 'app-page-switcher',
  templateUrl: './page-switcher.component.html',
  styleUrls: ['./page-switcher.component.scss']
})
export class PageSwitcherComponent {
  constructor(private command:CommandService){
    command.command = "landing";
  }

  get page():string{
    return this.command.command;
  }
}
