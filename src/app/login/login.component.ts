import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  login(): void {
    const credentials = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:8080/api/signin', credentials)
      .subscribe(response => {
        // Assuming the backend returns a token upon successful authentication
        const token = response.token;
        console.log('JWT Token:', token);
      }, error => {
        console.error('Login failed:', error);
      });
  }
}
