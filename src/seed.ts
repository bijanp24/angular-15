import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'Seed.html',
})
export class SeedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
