import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatFormFieldModule],
  templateUrl: 'blah.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
