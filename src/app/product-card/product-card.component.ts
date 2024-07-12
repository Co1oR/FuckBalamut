import { Component } from '@angular/core';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle
} from "@angular/material/card";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardImage,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatButton,
    MatCardContent,
    MatCardHeader,
    MatCard,
    MatCardSubtitle,
    MatCardFooter,
    MatCardActions
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
