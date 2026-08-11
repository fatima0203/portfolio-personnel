import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  private platformId = inject(PLATFORM_ID);

  isDark = true;

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('dark-mode');
    }

  }

  toggleTheme(): void {

    this.isDark = !this.isDark;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.toggle('dark-mode');
    }

  }

}