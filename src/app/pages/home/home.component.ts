import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faGithub = faGithub
  faLaptop = faLaptop
  faLightbulb = faLightbulb
  faLaptopCode = faLaptopCode
  faFacebook = faFacebook

  constructor() { }

  ngOnInit(): void {
  }

}
