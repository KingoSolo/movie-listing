import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './not-found.html',
  styleUrls: ['./not-found.css']
})
export class NotFoundComponent {}
