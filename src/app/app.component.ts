import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { CarListComponent } from './car-list/car-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HttpClientModule, CommonModule, RouterOutlet, LoginComponent, FormsModule, CarListComponent],
  providers: [CarService]
})
export class AppComponent {
  title = 'crud-angular';
}
