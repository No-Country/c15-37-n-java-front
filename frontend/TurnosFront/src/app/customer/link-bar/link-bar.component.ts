import { Component } from '@angular/core';
import { Collection } from 'src/app/shared/class/collection';
import { TextLink } from './text-link';

const lnks = [
  {
    text: "nosotros",
    url: "#nosotros"
  },
  {
    text: "servicio",
    url: "#servicio"
  },
  {
    text: "contacto",
    url: "#contacto"
  }
]
  ;
@Component({
  selector: 'app-link-bar',
  templateUrl: './link-bar.component.html',
  styleUrls: ['./link-bar.component.scss']
})
export class LinkBarComponent {
  links: Collection<TextLink>;

  constructor(){
    this.links = new Collection(TextLink);
    this.links.parse(lnks);
  }
}
