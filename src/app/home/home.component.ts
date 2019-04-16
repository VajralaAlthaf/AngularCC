import { Component, OnInit} from '@angular/core';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from 'ngx-stripe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elements: Elements;
  card: StripeElement;
  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: 'auto'
  };

  constructor(private stripeService: StripeService) { }

  ngOnInit() {

  }



}
