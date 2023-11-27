import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  token = '';

  constructor(private http: HttpClient) { }

  login(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer yourAccessToken'
    });

    const credentials = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:8080/api/signin', credentials, { headers: headers })
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        console.log('JWT Token:', token);
      }, error => {
        this.token = 'erro login';
        console.error('Login failed:', error);
      });
  }
}
