import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  currentNr: any = "";
  cachedNr: any = "";
  calculation: any = "";
  result: number;


  constructor() { }

  ngOnInit() {
  }

  addToCurrentNr(value) {
    this.calculation += value;
  }

  clear() {
    this.calculation = "";
    this.result = null;
  }

  calculate() {
    this.calculation += this.currentNr;
    this.result = eval(this.calculation);
  }

  sum() {
    this.calculation += "+";
  }

  subtract() {
    this.calculation += "-";
  }

  multiply() {
    this.calculation += "*";
  }

  divide() {
    this.calculation += "/";
  }
}
