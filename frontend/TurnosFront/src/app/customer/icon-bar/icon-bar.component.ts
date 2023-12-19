import { Component } from '@angular/core';
import { IconLink } from './icon-link';
import { Collection } from 'src/app/shared/class/collection';


const lnks = [
  {
    icon: "youtube",
    url: "http://www.facebook.com"
  },
  {
    icon: "facebook-f",
    url: "http://www.facebook.com"
  },
  {
    icon: "twitter",
    url: "http://www.twitter.com"
  },
  {
    icon: "instagram",
    url: "http://www.instagram.com"
  }
];

@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent {
  links: Collection<IconLink>;

  constructor(){
    this.links = new Collection(IconLink);
    this.links.parse(lnks);
  }
}
