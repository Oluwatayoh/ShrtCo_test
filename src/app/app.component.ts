import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { DataService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  url: string = '';
  shortLink1: string = '';
  shortLink2: string = '';
  isLinkReady: boolean = false;
  onShorten() {
    this.dataService.shorten(this.url).subscribe((data) => {
      if (data.ok == true) {
        this.isLinkReady = true;
        this.shortLink1 = data.result.full_short_link;
        this.shortLink2 = data.result.full_short_link2;
      }
      console.log(data);
    });
  }
}
