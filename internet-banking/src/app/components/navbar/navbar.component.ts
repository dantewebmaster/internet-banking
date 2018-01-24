import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	data = {
		username:String,
		balance:Number,
		account: Number,
		logs: Array
	}
  constructor(private router:Router,
              private http:HttpClient) { }

  ngOnInit() {
    let url = `http://localhost:3000/api/user`;
		this.http.post(url, {token: localStorage.getItem("auth-token")})
				.subscribe(
					res => {
						this.data.username = res['username']
						this.data.balance = res['balance']
						this.data.account = res["account"]
						this.data.logs =  res['logs'] 
					}
				)
  
  
  }

  desconectar(){

    localStorage.removeItem("auth-token")

    this.router.navigate(['/login'])

  }

}
