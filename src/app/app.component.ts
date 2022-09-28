import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mfl';
  CurrentPage = 0;

  nextPage() {
    if (this.CurrentPage < 5) {
      this.CurrentPage++;
    }
    return;
  }

  prevPage() {
    if (this.CurrentPage > 0) {
      this.CurrentPage--;
    }
    return;
  }
}


