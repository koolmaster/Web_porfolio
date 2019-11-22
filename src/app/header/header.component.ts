import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

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
}
