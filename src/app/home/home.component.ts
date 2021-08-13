import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
    const numb = window.scrollY;
    if (numb >= 0){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
