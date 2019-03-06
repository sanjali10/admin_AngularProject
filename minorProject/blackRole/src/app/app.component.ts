import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureSend='home';

  selectNavigation(feature:string)
  {

      this.featureSend=feature;
  }  
}
