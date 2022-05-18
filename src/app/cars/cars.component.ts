import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }

  cars: Car[];

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(){
    this.carService.getCars().subscribe({
      next: (response: Car[]) => this.cars = response,
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

  public addCars(){
    this.carService.addCar({color: 'Zelena', carType: 'Bavíčko', fuelType: 'Benzínek'}).subscribe({
      next: (response: Car) => this.getCars()
    });
  }

}
