import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  imports: [CommonModule],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent implements OnInit, AfterViewInit  {
  @ViewChild('toolFlexBox') toolFlexBox!: ElementRef;
  tools = [
    { img: '../../../assets/angular-icon.png', name: 'Angular Js' },
    { img: '../../../assets/react-icon.png', name: 'React Js' },
    { img: '../../../assets/js-icon.png', name: 'JavaScript' },
    { img: '../../../assets/sass-icon.png', name: 'Sass' },
    { img: '../../../assets/html-icon.png', name: 'HTML' },
    { img: '../../../assets/vue-icon.png', name: 'Vue' },
    { img: '../../../assets/swift-icon.png', name: 'Swift' },
    { img: '../../../assets/dart-icon.png', name: 'Dart' },
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.autoPlay();
  }

  autoPlay() {
    setInterval(() => {
      this.moveSlider();
    }, 3000); // Set auto-play interval (3 seconds)
  }

  moveSlider() {
    this.currentIndex++;
    if (this.currentIndex >= this.tools.length) {
      this.currentIndex = 0; // Reset the index to the first item
    }
    const offset = this.currentIndex * 150; // Adjust based on the width of the items
    this.toolFlexBox.nativeElement.style.transform = `translateX(-${offset}px)`;
  }
}
