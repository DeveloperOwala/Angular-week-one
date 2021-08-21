import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Things fall apart','chinua ichebe',newDate(2009,8,3)),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}


