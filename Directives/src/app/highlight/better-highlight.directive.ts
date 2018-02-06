import { Directive, OnInit, Renderer2, ElementRef, HostListener, Event, HostBinding} from '@angular/core';
import { Event } from '_debugger';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
  }
  @HostListener('mouseenter') mouseover(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false);
    this.backgroundColor='blue';
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor='transparent';

  }
}
