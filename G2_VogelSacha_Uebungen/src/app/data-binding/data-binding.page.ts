import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {
  user: any = {'name': 'Sacha', 'prename': 'Vogel', 'age': '18'};

  constructor() { }

  ngOnInit() {
  }

}
