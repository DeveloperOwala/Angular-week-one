import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes ('It is not the size of the dog in the fight, but the size of the fight in the dog.', 'Archie Griffen', new Date(2002,7,2)),
    new Quotes ('Nothing lasts forever. Not even your troubles.', 'Arnold H Glasgow', new Date(2014,12,10)),
    new Quotes ('It took me a long time not to judge myself through someone elses eyes.', 'Sally Field', new Date(1994,9,23)),
    new Quotes ('Hope never abandons you, you abandon it.','George Weinberg', new Date(2004,12,7)),
    new Quotes ('The secret is in not giving up, of all the greats they didnt quit. If you quit I guarantee you re gonna fail, but you dont know whats gunna happen if you dont give in.', 'Eric Thomas', new Date(2005,4,9)),
    new Quotes ('Believe you can and you are halfway there.', 'Theodore Roosevelt', new Date(1937,6,2))

  ];

  deleteQuote(isComplete: string, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quote[index].publisher}?`)

      if (toDelete) {
        this.quote.splice(index,1)
      }
    }
  }

  // addNewQuote(quote: Quotes) {
  //   let quoteLength = this.quote.length;
  //   quote.id = quoteLength+1;
  //   quote.isCompleteDate = new Date(quote.CompleteDate)
  //   this.quote.push(quote)
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
