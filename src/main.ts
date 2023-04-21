import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
//import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatFormFieldModule, RouterModule],
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
