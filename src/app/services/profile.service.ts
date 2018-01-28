import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '410e2fc499f7d3678207';
  private clientsecret = 'dd394a135d45d5b75cd0e04745a739e2b1ec2bf9';

  constructor(private http:Http) { 
  	console.log("service is now ready!");
  	this.username = 'phenix2017pr';
  }

  getProfileInfo() {
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos() {
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string) {
  	this.username = username;
  }

}
