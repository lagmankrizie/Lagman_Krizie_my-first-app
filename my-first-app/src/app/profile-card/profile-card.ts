import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-card',
  styleUrl: './profile-card.css',
  templateUrl: './profile-card.html',
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student learning to build modern web applications with Angular. I enjoy turning ideas into clean, responsive interfaces using HTML, CSS, JavaScript, and TypeScript. I am currently focused on component-based design, data binding, and writing reusable code. I like working on small projects that help me practice new concepts, and I am always looking for opportunities to improve through feedback and teamwork.';
}
