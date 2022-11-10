import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projectitem',
  templateUrl: './projectitem.component.html',
  styleUrls: ['./projectitem.component.css']
})
export class ProjectitemComponent implements OnInit {

  constructor(public serviceApi: ProjectService, private router: Router) { }

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
