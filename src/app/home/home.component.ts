import { Component, ComponentFactoryResolver, ViewContainerRef, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  splash: boolean = true;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.loadSplashScreen();

    setTimeout(() => {
      this.splash = false;
    }, 3000);
  }

  async loadSplashScreen() {
    this.viewContainerRef.clear();
    const { SplashScreenComponent } = await import('../splash-screen/splash-screen.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(SplashScreenComponent)
    );
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
