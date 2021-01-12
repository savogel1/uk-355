import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  person: any = { name : '', lastname : 'Vogel', username : 'savogel1', imgUrl : 'https://www.spektrum.de/fm/912/thumbnails/Wei__kopfseeadler-iStock-172208946_BirdImages.jpg.4572778.jpg' };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.person.name = this.route.snapshot.paramMap.get('name');
  }

}
