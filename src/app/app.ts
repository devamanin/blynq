import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Hero, Products, Footer],
  template: `
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute -top-72 left-1/2 h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-[#dce8ff]/70 blur-3xl"></div>
      <div class="absolute right-[-18%] top-[42%] h-[520px] w-[520px] rounded-full bg-[#d5faf2]/60 blur-3xl"></div>
      <div class="absolute inset-0 ether-pattern opacity-70"></div>
    </div>

    <!-- Main Navigation -->
    <app-navbar></app-navbar>

    <!-- Main Content Canvas -->
    <main class="relative z-10 snap-y snap-mandatory pt-24 pb-20">
      <!-- Hero Section -->
      <app-hero></app-hero>

      <!-- Products Section -->
      <app-products></app-products>
    </main>

    <!-- Footer -->
    <app-footer></app-footer>

    <router-outlet />
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'blynq-app';
}

