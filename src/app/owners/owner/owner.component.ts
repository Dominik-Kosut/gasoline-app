import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Owner } from '../owner';
import { OwnersService } from '../owners.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit, OnDestroy{

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ownersService: OwnersService) { }

  owner: Owner = <Owner>{};
  paramsSubscription: Subscription;

  ngOnInit(): void {
    this.getOwnerByID(+this.route.snapshot.params['id']);

    this.paramsSubscription = this.route.params.subscribe({
      next: (params: Params) => {
        this.getOwnerByID(+params['id']);
        console.log(params);
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.ownersService.deleteOwner(this.owner.id).subscribe({
      next: respond => console.log(respond),
      complete: () => {
        this.ownersService.ownersChange.next(null)
        this.router.navigate(['owners']);
      }
    });
  }

  private getOwnerByID(id: number){
    this.ownersService.getOwner(+this.route.snapshot.params['id']).subscribe({
      next: (response: Owner) => {
        this.owner = response;
      }
    });
  }

}
