import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-card',
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent //implements AfterViewInit, OnInit 
{

  //@ViewChild('canary', { read: ElementRef, static: true}) header: ElementRef | undefined;
  //hasHeader:boolean = false
  constructor() { 
    
  }
  // ngOnInit(): void {
  //   this.hasHeader = !this.header;
  //   console.log(this.header, this.header?.nativeElement.innerHTML);  // return true if there is a content
  //   console.log(this.hasHeader, this.header?.nativeElement);
  // }

  // ngAfterViewInit() : void {
    
  // }

}
