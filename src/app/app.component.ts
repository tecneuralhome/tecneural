import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'my-product';
  visibility_block:boolean = false
  visibility_bit:boolean = false
  visibility_sol:boolean = false
  visibility_dev :boolean =false
  visibility_app :boolean =false
  visibility_ui :boolean =false

  services = [
    { img: '../assets/service-tag-block-chain.png', name: 'Blockchain Services' },
    { img: '../assets/service-tag-exchange.png', name: 'Cryptocurrency Exchange' },
    { img: '../assets/service-tag-marketplace.png', name: 'NFT Marketplace' },
    { img: '../assets/service-tag-contract.png', name: 'Smart Contract Development' },
    { img: '../assets/service-tag-decentralized.png', name: 'DApp Development' },
    { img: '../assets/service-tag-block-chain.png', name: 'Blockchain Services' },
    { img: '../assets/service-tag-exchange.png', name: 'Cryptocurrency Exchange' },
    { img: '../assets/service-tag-marketplace.png', name: 'NFT Marketplace' },
    { img: '../assets/service-tag-contract.png', name: 'Smart Contract Development' },
    { img: '../assets/service-tag-decentralized.png', name: 'DApp Development' },
    { img: '../assets/service-tag-block-chain.png', name: 'Blockchain Services' },
    { img: '../assets/service-tag-exchange.png', name: 'Cryptocurrency Exchange' },
    { img: '../assets/service-tag-marketplace.png', name: 'NFT Marketplace' },
    { img: '../assets/service-tag-contract.png', name: 'Smart Contract Development' },
    { img: '../assets/service-tag-decentralized.png', name: 'DApp Development' },
  ];

  tools = [
    { img: '../assets/angular-icon.png', name: 'Angular Js' },
    { img: '../assets/react-icon.png', name: 'React Js' },
    { img: '../assets/js-icon.png', name: 'JavaScript' },
    { img: '../assets/sass-icon.png', name: 'Sass' },
    { img: '../assets/html-icon.png', name: 'HTML' },
    { img: '../assets/vue-icon.png', name: 'Vue' },
    { img: '../assets/swift-icon.png', name: 'Swift' },
    { img: '../assets/dart-icon.png', name: 'Dart' },
    { img: '../assets/angular-icon.png', name: 'Angular Js' },
    { img: '../assets/react-icon.png', name: 'React Js' },
    { img: '../assets/js-icon.png', name: 'JavaScript' },
    { img: '../assets/sass-icon.png', name: 'Sass' },
    { img: '../assets/html-icon.png', name: 'HTML' },
    { img: '../assets/vue-icon.png', name: 'Vue' },
    { img: '../assets/swift-icon.png', name: 'Swift' },
    { img: '../assets/dart-icon.png', name: 'Dart' },
    { img: '../assets/angular-icon.png', name: 'Angular Js' },
    { img: '../assets/react-icon.png', name: 'React Js' },
    { img: '../assets/js-icon.png', name: 'JavaScript' },
    { img: '../assets/sass-icon.png', name: 'Sass' },
    { img: '../assets/html-icon.png', name: 'HTML' },
    { img: '../assets/vue-icon.png', name: 'Vue' },
    { img: '../assets/swift-icon.png', name: 'Swift' },
    { img: '../assets/dart-icon.png', name: 'Dart' },
  ];



  currentSlide = 0;
  translateX = 0;
  autoPlayInterval!: any;

  currentSlide_tool = 0;
  translateX_tool = 0;
  autoPlayInterval_tool!: any;



  constructor(private windowService: WindowService) {}

  ngOnInit() {
    this.startAutoPlay();

    this.startAutoPlay_tool();
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayInterval);

    clearInterval(this.autoPlayInterval_tool);
  }

  startAutoPlay() {
    const win = this.windowService.nativeWindow; // Safe access to `window`
    if (win) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 3000); // Change slides every 3 seconds
    }
  }

  startAutoPlay_tool() {
    const win_tool = this.windowService.nativeWindow; // Safe access to `window`
    if (win_tool) {
      this.autoPlayInterval_tool = setInterval(() => {
        this.nextSlide_tool();
      }, 3000); // Change slides every 3 seconds
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.services.length;
    this.translateX = -this.currentSlide * 100; // Adjust slide position

  }


  nextSlide_tool() {

  this.currentSlide_tool = (this.currentSlide_tool - 1 + this.tools.length) % this.tools.length;
  this.translateX_tool = -this.currentSlide_tool * 100; // Adjust slide position
  }


}
