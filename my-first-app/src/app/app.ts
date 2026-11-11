import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Krizie Mae P. Lagman';
  location = 'San Fernando, Pampanga';
  email = 'lagmankrizie@gmail.com';
  phone = '0908 633 4830';

  profile = 'I am a 3rd year student major in web development. I enjoy learning new technologies and building useful applications. I am hardworking, detail-oriented, and eager to grow my skills through real projects and teamwork.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Dart',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
