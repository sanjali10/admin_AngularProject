import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelect=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  navigate(navigate:string)
  {
      this.featureSelect.emit(navigate);
  }
}
