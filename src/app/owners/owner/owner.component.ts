import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Owner } from '../owner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit, OnDestroy{

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  owner: Owner;
  paramsSubscription: Subscription;

  ngOnInit(): void {
    this.owner = {
      id: this.route.snapshot.params['id'],
      name: null,
      surname: null,
      email: null,
      age: null
    };

    this.paramsSubscription = this.route.params.subscribe({
      next: (params: Params) => {
        this.owner.id = params['id'];
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
