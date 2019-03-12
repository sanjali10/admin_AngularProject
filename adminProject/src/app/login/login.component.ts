import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   loginForm=this.fb.group({
     name:['ccccc'],
     password:['cc'],
     remberMe:[true],
   })
  ngOnInit() {
  }

}
