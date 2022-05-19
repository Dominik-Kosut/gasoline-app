import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Owner } from './owner';
import { OwnersService } from './owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  constructor(private ownerService: OwnersService){}

  owners: Owner[];

  ngOnInit(): void {
    this.getOwners();
  }

  public getOwners(){
    this.ownerService.getOwners().subscribe({
      next: (response: Owner[]) => this.owners = response,
      error: (error: HttpErrorResponse) => console.log(error)
    });
  }

  public addOwner(){
    this.ownerService.addOwner({id: 0, name: 'Jmeno', surname: 'Prijmeni', email: 'email@google.com', age: 123456}).subscribe({
      next: (response: Owner) => this.getOwners()
    });
  }

  public deleteOwner(id: number){
    this.ownerService.deleteOwner(id).subscribe({
      next: respond => console.log(respond),
      complete: () => this.getOwners()
    });
  }


}
