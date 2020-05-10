import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sudoku-front';
  board: any[] =[];

  ngOnInit() {
    for(let i= 0;i< 9;i++ ) {
      this.board.push(new Array(9).fill(undefined));
    }
  }

  changeValue(event, col,j) {
    col[Number(j)] = Number(event.target.value);
    console.log(this.board);
  }

  indexTracker(index: number, value: any) {
    return index;
  }
}
