import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.page.html',
  styleUrls: ['./array.page.scss'],
})
export class ArrayPage implements OnInit {
  fruits: any = [
    {
      name: 'Orange',
      img: 'https://www1.wdr.de/radio/wdr4/wort/ullas-lieblingsrezepte/ulla-orangen-106~_v-Podcast.jpg'
    },
    {
      name: 'Banane',
      img: 'https://www.gesundheit.de/sites/default/files/2016-02/banane-gesund.jpg'
    },
    {
      name: 'Apfel',
      img: 'https://cdn.prod.www.spiegel.de/images/f728e01c-0001-0004-0000-000001494716_w948_r1.77_fpx49.33_fpy49.99.jpg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
