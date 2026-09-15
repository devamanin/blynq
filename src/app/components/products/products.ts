import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <!-- Products Section -->
    <section class="box-border min-h-[calc(100svh-6rem)] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col justify-center snap-start" id="products">
      <div class="w-full flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div><p class="font-label-sm uppercase tracking-[0.2em] text-primary">The ecosystem</p><h2 class="mt-3 font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary">Tools that think ahead.</h2></div>
      </div>
      <div class="mt-10 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
        @for (product of products; track product.name; let index = $index) {
          <article class="product-card group" [class]="product.backgroundClass">
            <div class="flex items-start justify-between">
              <div class="icon-tile text-white" [class]="product.iconClass"><span class="material-symbols-outlined">{{ product.icon }}</span></div>
              <span class="font-label-sm" [class]="product.accentClass">{{ (index + 1).toString().padStart(2, '0') }}</span>
            </div>
            <div>
              <h3 class="mt-12 font-headline-md text-headline-md text-text-primary">{{ product.name }}</h3>
              <p class="mt-3 font-body-md text-text-secondary">{{ product.description }}</p>
              <a href="#" class="mt-7 inline-flex items-center gap-2 font-label-md" [class]="product.accentClass">Discover {{ product.name }} <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
            </div>
          </article>
        }
      </div>

    </section>

    <section id="about" class="box-border min-h-[calc(100svh-6rem)] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex items-center snap-start">
      <div class="w-full overflow-hidden rounded-[2rem] bg-[#10264a] px-6 py-8 text-white shadow-[0_24px_70px_rgba(16,38,74,0.18)] md:px-12 md:py-10">
        <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p class="font-label-sm uppercase tracking-[0.2em] text-[#75f3d8]">Our approach</p>
            <h2 class="mt-4 max-w-lg font-headline-lg text-headline-lg-mobile md:text-headline-lg">Technology should give you room to think.</h2>
            <p class="mt-5 max-w-md font-body-md text-white/60">We make ambitious technology feel human: clear enough to trust, beautiful enough to enjoy, and useful enough to become part of your everyday.</p>
          </div>
          <div class="grid gap-3 sm:grid-cols-3">
            <article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="font-label-sm text-[#75f3d8]">01</span><h3 class="mt-8 font-headline-md text-[20px] text-white">Start with clarity</h3><p class="mt-3 font-body-md text-sm text-white/55">We remove noise before we add features.</p></article>
            <article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="font-label-sm text-[#75f3d8]">02</span><h3 class="mt-8 font-headline-md text-[20px] text-white">Design for agency</h3><p class="mt-3 font-body-md text-sm text-white/55">The final decision always stays with you.</p></article>
            <article class="rounded-2xl border border-white/10 bg-white/5 p-5"><span class="font-label-sm text-[#75f3d8]">03</span><h3 class="mt-8 font-headline-md text-[20px] text-white">Keep learning</h3><p class="mt-3 font-body-md text-sm text-white/55">Every interaction should make the next one better.</p></article>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './products.css',
})
export class Products {
  protected readonly products = [
    {
      name: 'Log',
      icon: 'edit_note',
      description: 'Journal every trade automatically or by hand, capture your thinking, and learn from your decisions.',
      backgroundClass: 'bg-[#e9f0ff]',
      iconClass: 'bg-[#2e72ff]',
      accentClass: 'text-primary',
    },
    {
      name: 'Quant',
      icon: 'query_stats',
      description: 'Explore indicators, build strategies, and turn your market ideas into a repeatable process.',
      backgroundClass: 'bg-[#e5f9f3]',
      iconClass: 'bg-[#00a99a]',
      accentClass: 'text-[#008b7f]',
    },
    {
      name: 'Scout',
      icon: 'travel_explore',
      description: 'Compare prop firms, find the right fit, and unlock special discounts plus Blynq loyalty points.',
      backgroundClass: 'bg-[#fff0dd]',
      iconClass: 'bg-[#e58b38]',
      accentClass: 'text-[#b86a22]',
    },
    {
      name: 'GEX',
      icon: 'monitoring',
      description: 'Read options market positioning, spot pressure zones, and make sharper decisions with gamma exposure.',
      backgroundClass: 'bg-[#f2eaff]',
      iconClass: 'bg-[#7a4ee8]',
      accentClass: 'text-[#6840c4]',
    },
  ];
}
