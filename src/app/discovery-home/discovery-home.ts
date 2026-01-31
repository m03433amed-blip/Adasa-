import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface data {
  categories: catInterface[];
}
interface catInterface {
  name: string;
  count: number;
  color: string;
}
@Component({
  selector: 'app-discovery-home',
  imports: [RouterLink],
  templateUrl: './discovery-home.html',
  styleUrl: './discovery-home.css',
})
export class DiscoveryHome {
  category: data = {
    categories: [
      { name: 'إضاءة', count: 3, color: 'emerald' },
      { name: 'بورتريه', count: 3, color: 'purple' },
      { name: 'مناظر طبيعية', count: 2, color: 'blue' },
      { name: 'تقنيات', count: 5, color: 'orange' },
      { name: 'معدات', count: 3, color: 'emerald' },
    ],
  };
  // object of icons
  icons: { [key: string]: string } = {
    emerald: 'fa-solid fa-gear color-FF6900',
    purple: 'fa-solid fa-user color-FF6900',
    blue: ' fa-solid fa-mountain-sun color-FF6900',
    orange: 'fa-solid fa-sliders color-FF6900',
  };
  // function of get icons
  getIcon(ico: string): string {
    return this.icons[ico];
  }
}
