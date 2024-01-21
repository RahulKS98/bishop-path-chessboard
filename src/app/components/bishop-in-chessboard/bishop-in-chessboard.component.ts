import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bishop-in-chessboard',
  templateUrl: './bishop-in-chessboard.component.html',
  styleUrls: ['./bishop-in-chessboard.component.css'],
})
export class BishopInChessboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public title: String = 'Chess Board';
  public tempArray: any = Array.from({ length: 8 }, () => Array(8).fill(0));

  /**
   * 2-D array to store row column values for hover color change
   * @param number
   */
  getNumberArray(number: number): any {
    return Array(number);
  }

  /**
   * Logic to apply color on hover
   * @param row
   * @param column
   */
  onHover(row: number, column: number) {
    for (let i: any = 0; i < 8; i++)
      for (let j: any = 0; j < 8; j++) {
        if (Math.abs(row - i) == Math.abs(column - j)) {
          this.tempArray[i][j] = 1;
        }
      }
  }

  /**
   * Logic to remove color on mouse leave from the div
   */
  onLeave() {
    for (let i: any = 0; i < 8; i++)
      for (let j: any = 0; j < 8; j++) {
        this.tempArray[i][j] = 0;
      }
  }
}
