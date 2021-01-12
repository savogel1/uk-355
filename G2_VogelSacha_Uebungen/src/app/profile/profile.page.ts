import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  person: any = { name : 'Sacha', lastname : 'Vogel', username : '', imgUrl : 'https://www.spektrum.de/fm/912/thumbnails/Wei__kopfseeadler-iStock-172208946_BirdImages.jpg.4572778.jpg' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.person.username = this.route.snapshot.paramMap.get('username');
  }

}
