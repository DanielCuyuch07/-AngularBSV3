import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {



  httpOptions = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

  constructor(private http: HttpClient,) { }

  prueba() {
    return this.http.get(environment.baseUrl + 'user/prueba', { headers: this.httpOptions });
  }

  register(params: {}) {
    return this.http.post(environment.baseUrl + 'user/register', params, { headers: this.httpOptions });
  }

  login(params: {}) {
    return this.http.post(environment.baseUrl + 'user/login', params, { headers: this.httpOptions });
  }

  getUsuarios() {
    return this.http.get(environment.baseUrl + 'user/getUsuarios', { headers: this.httpOptions });
  }

  deleteUser(id: string) {
    return this.http.delete(environment.baseUrl + 'user/deleteUser/' + id, { headers: this.httpOptions });
  }

  updateUser(id: string, params: {}) {
    return this.http.put(environment.baseUrl + 'user/updateUser/' + id, params, { headers: this.httpOptions })
  }



  getToken() {
    let globalToken = localStorage.getItem('token');
    let token;
    if (globalToken != undefined) {
      token = globalToken;
    } else {
      token = ''
    }
    return token;
  }

  getIdentity() {
    let globalIdentity = localStorage.getItem('identity');
    let identity;
    if (globalIdentity != undefined) {
      identity = JSON.parse(globalIdentity);
    } else {
      identity = '';
    }
    return identity;
  }
}
