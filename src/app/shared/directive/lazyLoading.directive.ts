import { Directive, AfterViewInit, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadingDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @Input() src: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  lazyLoadImage() {

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        const a = this.el.nativeElement.getBoundingClientRect().top;
        if ( a <= window.innerHeight + 200) {
          if (isIntersecting) {
            this.loadImage();
            obs.unobserve(this.el.nativeElement);
            console.log(isIntersecting);
          }
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  loadImage() {
    this.srcAttr = this.src;
  }
}
