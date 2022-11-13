import { Component } from '@angular/core';
import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faGithub = faGithub
  faLaptop = faLaptop
  faLightbulb = faLightbulb
  faLaptopCode = faLaptopCode
  faFacebook = faFacebook

  title = 'portfolio';
}
