import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  hide: boolean = false;

  constructor() {}

  ngOnInit(): void { 
    setTimeout(() => {
      this.hide = true;
    }, 2000);
  }
}
