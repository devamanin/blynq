import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <!-- Footer -->
    <footer class="relative z-10 isolate mt-24 w-full overflow-hidden border-t border-border-subtle bg-[#f3f3f9] shadow-none">
      <div class="relative z-10 grid grid-cols-2 gap-8 max-w-container-max mx-auto px-margin-mobile py-12 md:grid-cols-5 md:gap-stack-lg md:px-margin-desktop md:py-stack-lg">
        <!-- Brand Column -->
        <div class="col-span-2 flex flex-col gap-4">
          <a class="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2" href="#">
            <img alt="Blynq Logo Footer" class="w-12 h-12 object-contain" 
              src="/logo.png"/>
            Blynq.app
          </a>
          <p class="font-body-md text-body-md text-text-secondary max-w-sm mt-2">
            © 2026 Blynq.app. Empowering minds, Liberating Futures.
          </p>
          <div class="mt-2 flex items-center gap-3">
            <a class="social-link" href="https://www.instagram.com/blynqapp/" target="_blank" rel="noopener noreferrer" aria-label="Blynq.app on Instagram">
              <span class="material-symbols-outlined text-[18px]">photo_camera</span>
              Instagram
            </a>
            <a class="social-link" href="https://www.linkedin.com/company/blynq-app/" target="_blank" rel="noopener noreferrer" aria-label="Blynq.app on LinkedIn">
              <span class="font-bold text-[15px]">in</span>
              LinkedIn
            </a>
          </div>
        </div>
        <!-- Links Columns -->
        <div class="flex flex-col gap-4">
          <h4 class="font-label-md text-text-primary mb-2">Products</h4>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#products">Log</a>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#products">Quant</a>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#products">Scout</a>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-label-md text-text-primary mb-2">Company</h4>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#">About Us</a>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#">Careers</a>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-label-md text-text-primary mb-2">Resources</h4>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#">Terms</a>
          <a class="text-text-secondary hover:text-primary transition-colors font-body-md" href="#">Privacy</a>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.css',
})
export class Footer {

}
