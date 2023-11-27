import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { CarService } from '../service/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  token = '';
  cars: Car[] = [];
  selectedCar?: Car;
  newCar: Car = { year: 2023, licensePlate: '', model: '', color: '' };

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars(this.token).subscribe((cars) => {
      this.cars = cars;
    });
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  addCar(): void {
    this.carService.addCar(this.newCar, this.token).subscribe((car) => {
      this.cars.push(car);
    });
  }

  updateCar(): void {
    if (this.selectedCar) {
      this.carService.updateCar(this.selectedCar).subscribe(() => {
        this.loadCars();
      });
    }
  }

  deleteCar(): void {
    if (this.selectedCar) {
      this.carService.deleteCar(this.selectedCar.id!).subscribe(() => {
        this.loadCars();
      });
    }
  }
}
