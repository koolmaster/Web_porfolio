import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  show = false;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
    const navTop = document.getElementById('header').offsetHeight + 50;
    if (window.pageYOffset > navTop) {
      const element = document.getElementById('header');
      element.classList.add('navbar_fixed');
    } else {
      const element = document.getElementById('header');
      element.classList.remove('navbar_fixed');
    }
  }

  showMenu() {
    this.show = !this.show;
  }
}
