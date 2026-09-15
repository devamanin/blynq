import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- TopNavBar -->
    <nav class="fixed top-0 w-full z-50 px-4 pt-4 md:px-8">
      <div class="flex justify-between items-center max-w-container-max mx-auto px-4 md:px-6 h-16 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_12px_40px_rgba(16,36,74,0.08)]">
        <!-- Brand Logo -->
        <a class="flex items-center gap-1 group" href="#">
          <img alt="Blynq.app Bird Logo" class="h-12 w-12 object-contain" 
            src="/logo.png"/>
          <span class="font-display-sm text-display-sm font-bold text-primary tracking-tighter text-[24px] leading-none group-hover:text-primary-container transition-colors duration-300">Blynq<span class="text-[#00a99a]">.</span>app</span>
        </a>
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8 relative h-full">
          <!-- Mega Menu Trigger -->
          <div class="nav-item-products h-full flex items-center relative cursor-pointer">
            <span class="text-text-secondary hover:text-primary transition-colors flex items-center gap-1 font-label-md">
              Products
              <span class="material-symbols-outlined text-[16px]">expand_more</span>
            </span>
            <!-- Mega Menu Dropdown -->
            <div class="nav-mega-menu absolute top-[80px] left-1/2 -translate-x-1/2 w-[400px] bg-surface rounded-xl p-stack-md border border-border-subtle shadow-xl">
              <div class="flex flex-col gap-4">
                <a class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                  <div class="bg-primary-container/10 p-2 rounded-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">data_usage</span>
                  </div>
                  <div>
                    <h4 class="font-label-md text-text-primary">Log</h4>
                    <p class="font-label-sm text-text-secondary mt-1">Journal your trades and decisions.</p>
                  </div>
                </a>
                <a class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                  <div class="bg-primary-container/10 p-2 rounded-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h4 class="font-label-md text-text-primary">Quant</h4>
                    <p class="font-label-sm text-text-secondary mt-1">Indicators, strategies, and market tools.</p>
                  </div>
                </a>
                <a class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                  <div class="bg-primary-container/10 p-2 rounded-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <h4 class="font-label-md text-text-primary">Scout</h4>
                    <p class="font-label-sm text-text-secondary mt-1">Compare prop firms and earn rewards.</p>
                  </div>
                </a>
                <a class="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors group" href="#">
                  <div class="bg-primary-container/10 p-2 rounded-md text-primary-container group-hover:bg-primary-container group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">monitoring</span>
                  </div>
                  <div>
                    <h4 class="font-label-md text-text-primary">GEX</h4>
                    <p class="font-label-sm text-text-secondary mt-1">Read gamma exposure and market pressure.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a class="text-text-secondary hover:text-primary transition-colors font-label-md" href="#about">Our approach</a>
        </div>
        <!-- Trailing Actions -->
        <!-- <div class="hidden md:flex items-center gap-stack-sm">
          <a class="font-label-md text-text-secondary hover:text-text-primary transition-colors px-3 py-2" href="#">Sign in</a>
          <a class="btn-primary-gradient font-label-md px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm" href="#products">Launch app <span class="material-symbols-outlined align-middle text-[16px]">north_east</span></a>
        </div> -->
        <!-- Mobile Menu Toggle -->
        <button class="md:hidden grid h-10 w-10 place-items-center rounded-xl text-text-secondary hover:bg-surface-container-low" type="button" [attr.aria-expanded]="menuOpen" [attr.aria-label]="menuOpen ? 'Close menu' : 'Open menu'" (click)="toggleMenu()">
          <span class="material-symbols-outlined text-[24px]">{{ menuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
      <div *ngIf="menuOpen" class="mx-auto mt-3 max-w-container-max rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_16px_40px_rgba(16,36,74,0.12)] backdrop-blur-xl md:hidden">
        <button class="mobile-nav-link w-full" type="button" [attr.aria-expanded]="productsOpen" aria-controls="mobile-products" (click)="toggleProducts()">
          <span>Products</span>
          <span class="material-symbols-outlined text-[20px] transition-transform duration-200" [class.rotate-180]="productsOpen">expand_more</span>
        </button>
        <div *ngIf="productsOpen" id="mobile-products" class="mt-1 space-y-1 border-l-2 border-primary/15 pl-3">
          <a class="mobile-product-link" href="#products" (click)="closeMenu()"><span><strong>Log</strong><small>Trade journalling</small></span><span class="material-symbols-outlined text-[17px]">arrow_forward</span></a>
          <a class="mobile-product-link" href="#products" (click)="closeMenu()"><span><strong>Quant</strong><small>Indicators and strategies</small></span><span class="material-symbols-outlined text-[17px]">arrow_forward</span></a>
          <a class="mobile-product-link" href="#products" (click)="closeMenu()"><span><strong>Scout</strong><small>Prop firms and rewards</small></span><span class="material-symbols-outlined text-[17px]">arrow_forward</span></a>
          <a class="mobile-product-link" href="#products" (click)="closeMenu()"><span><strong>GEX</strong><small>Gamma exposure and market pressure</small></span><span class="material-symbols-outlined text-[17px]">arrow_forward</span></a>
        </div>
        <a class="mobile-nav-link" href="#about" (click)="closeMenu()">Our approach <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
        <!-- <a class="mobile-nav-link" href="#" (click)="closeMenu()">Sign in <span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>
        <a class="btn-primary-gradient mt-2 flex items-center justify-between rounded-xl px-4 py-3 font-label-md" href="#products" (click)="closeMenu()">Launch app <span class="material-symbols-outlined text-[18px]">north_east</span></a> -->
      </div>
    </nav>
  `,
  styleUrl: './navbar.css',
})
export class Navbar {
  protected menuOpen = false;
  protected productsOpen = false;

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
    this.productsOpen = false;
  }

  protected toggleProducts(): void {
    this.productsOpen = !this.productsOpen;
  }
}
