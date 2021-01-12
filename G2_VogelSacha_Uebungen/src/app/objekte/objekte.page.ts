import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.page.html',
  styleUrls: ['./objekte.page.scss'],
})
export class ObjektePage implements OnInit {
  person: any = { vorname : 'Sacha', nachname : 'Vogel' };

  constructor() { }

  ngOnInit() {
  }

}
