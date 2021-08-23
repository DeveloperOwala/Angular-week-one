import { Component, OnInit, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'It is not the size of the dog in the fight, but the size of the fight in the dog.', 'Archie Griffen', new Date(2002, 7, 2)),
    new Quotes(2, 'Nothing lasts forever. Not even your troubles.', 'Arnold H Glasgow', new Date(2014, 12, 10)),
    new Quotes(3, 'It took me a long time not to judge myself through someone elses eyes.', 'Sally Field', new Date(1994, 9, 23)),
    new Quotes(4, 'Hope never abandons you, you abandon it.', 'George Weinberg', new Date(2004, 12, 7)),
    new Quotes(5, 'The secret is in not giving up, of all the greats they didnt quit. If you quit I guarantee you re gonna fail, but you dont know whats gunna happen if you dont give in.', 'Eric Thomas', new Date(2005, 4, 9)),
    new Quotes(6, 'Nothing splendid has ever been achieved except by those who dared believe that something inside of them was superior to circumstance.', 'Bruce Barton', new Date(2012, 8, 12))

  ];
  toggleDetails(index){
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

//   deleteQuote(isComplete: string, index: number) {
//     if (isComplete) {
//       let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quote[index].publisher}?`)

//       if (toDelete) {
//         this.quotes.splice(index, 1)
//       }
//     }
//   }

//   addNewQuote(quote: Quotes) {
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength + 1;
//     quote.completeDate = new Date(quote.completeDate)
//     this.quotes.push(quote)
//   }

  constructor() { }

  ngOnInit(): void {
  }

}
