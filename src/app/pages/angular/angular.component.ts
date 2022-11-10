import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymfonyService } from 'src/app/service/symfony.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor(public serviceApi: SymfonyService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    this.serviceApi.getAll().subscribe(
      response => {
        this.serviceApi.list = response["hydra:member"];
      }
    );

  }
}
