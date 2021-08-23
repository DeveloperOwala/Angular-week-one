import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

  // @Input()
  // quote!: Quotes;
  // @Output()
  // publisher!: Quotes;
  // @Output() isComplete = new EventEmitter<boolean>();

  // constructor() { }

  // quoteDelete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  // Function for upvotes and downvotes
  // upVotes: number = 0;
  // downVotes: number = 0;

  // likeButtonClick(){
  //   this.upVotes++;
  // }

  // dislikeButtonClick(){
  //   this.downVotes++;
  // }


}










