import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.page.html',
  styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToNavigation() {
    this.router.navigateByUrl('/navigation');
  }

  navigateToProfile() {
    this.router.navigate(['/profile', { name: 'Sacha'}]);
  }
}
