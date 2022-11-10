import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SymfonyService } from 'src/app/service/symfony.service';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-symfony',
  templateUrl: './symfony.component.html',
  styleUrls: ['./symfony.component.css']
})
export class SymfonyComponent implements OnInit {

  constructor(public serviceApi: SymfonyService, private router: Router
  ) { }

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
