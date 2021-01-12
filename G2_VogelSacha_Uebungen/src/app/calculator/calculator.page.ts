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
    this.calculation = "";
  }

  sum() {
    this.addSign("+");
  }

  subtract() {
    this.addSign("-");
  }

  multiply() {
    this.addSign("*");
  }

  divide() {
    this.addSign("/");
  }

  addSign(sign) {
    let length = this.calculation.length;
    let lastChar = this.calculation.substr(length - 1);
    switch (lastChar) {
      case '+':
        this.calculation = this.calculation.replace(lastChar, "");
        break;
      case '-':
        this.calculation = this.calculation.replace(lastChar, "");
        break;
      case '*':
        this.calculation = this.calculation.replace(lastChar, "");
        break;
      case '/':
        this.calculation = this.calculation.replace(lastChar, "");
        break;
    }
    this.calculation += sign;
  }
}
