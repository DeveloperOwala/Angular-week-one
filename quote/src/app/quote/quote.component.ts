import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes('Things fall apart','chinua ichebe',newDate(2009,8,3)),

  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quote[index].author}?`)

      if (toDelete) {
        this.quote.splice(index,1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.isCompleteDate = new Date(quote.CompleteDate)
    this.quote.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }
  @Input() quote: Quote;
}


