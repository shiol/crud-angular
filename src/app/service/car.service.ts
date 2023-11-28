// car.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl = 'http://localhost:8080/api/cars';


  constructor(private http: HttpClient) { }

  getAllCars(token: string): Observable<Car[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Car[]>(this.apiUrl, { headers: headers, withCredentials: true });
  }

  getCarById(id: number, token: string): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<Car>(`${this.apiUrl}/${id}`, { headers: headers, withCredentials: true });
  }

  addCar(car: Car, token: string): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<Car>(this.apiUrl, car, { headers: headers, withCredentials: true });
  }

  updateCar(car: Car, token: string): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.put<Car>(`${this.apiUrl}/${car.id}`, car, { headers: headers, withCredentials: true });
  }

  deleteCar(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: headers, withCredentials: true });
  }
}
