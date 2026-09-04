import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <!-- Hero Section -->
    <section class="box-border min-h-[calc(100svh-6rem)] max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center justify-center text-center snap-start">
      <div class="flex w-full max-w-3xl flex-col items-center gap-6">
        
        <h1 class="font-display-lg text-headline-lg-mobile md:text-display-lg text-text-primary max-w-2xl">
          Make complexity<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#1686f5] to-[#00a99a]">feel simple.</span>
        </h1>
        <p class="font-body-lg text-text-secondary max-w-xl">
          Blynq.app builds calm, intelligent tools for finance and technology, so better decisions feel closer than ever.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 mt-2">
          <a class="btn-primary-gradient font-label-md px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md" href="#products">
            Explore products <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a class="px-6 py-3.5 rounded-xl border border-black/10 bg-white/60 text-text-primary hover:bg-white font-label-md flex items-center justify-center gap-2 transition-all duration-300" href="#about">
            How we think <span class="material-symbols-outlined text-[18px]">north_east</span>
          </a>
        </div>
        <div class="flex items-center gap-3 mt-4 text-text-secondary font-label-sm">
          <div class="flex -space-x-2">
            <span class="h-8 w-8 rounded-full border-2 border-white bg-[#d8e5ff] grid place-items-center text-primary font-bold">A</span>
            <span class="h-8 w-8 rounded-full border-2 border-white bg-[#d5f6ef] grid place-items-center text-[#008b7f] font-bold">M</span>
            <span class="h-8 w-8 rounded-full border-2 border-white bg-[#ffe4c7] grid place-items-center text-[#b86a22] font-bold">J</span>
          </div>
          Built for curious minds
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.css',
})
export class Hero {

}


// <div class="relative lg:translate-y-4">
//         <div class="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/15 to-[#00cdb8]/15 blur-2xl"></div>
//         <div class="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-[#10264a] p-5 shadow-[0_30px_80px_rgba(16,38,74,0.22)] md:p-7">
//           <div class="flex items-center justify-between border-b border-white/10 pb-5">
//             <div class="flex items-center gap-3">
//               <div class="grid h-10 w-10 place-items-center rounded-xl bg-[#2e72ff] text-white"><span class="material-symbols-outlined">insights</span></div>
//               <div><p class="font-label-md text-white">Blynq signal</p><p class="font-label-sm text-white/45">Your world, in focus</p></div>
//             </div>
//             <span class="rounded-full bg-[#75f3d8]/10 px-3 py-1 font-label-sm text-[#75f3d8]">Live</span>
//           </div>
//           <div class="py-8">
//             <div class="flex items-end justify-between"><div><p class="font-label-sm text-white/45">Portfolio health</p><p class="mt-2 text-4xl font-bold tracking-tight text-white">+18.42%</p></div><span class="material-symbols-outlined text-[#75f3d8] text-3xl">trending_up</span></div>
//             <div class="mt-7 flex h-28 items-end gap-2">
//               <span class="h-[35%] flex-1 rounded-t bg-white/15"></span><span class="h-[48%] flex-1 rounded-t bg-white/20"></span><span class="h-[42%] flex-1 rounded-t bg-white/20"></span><span class="h-[64%] flex-1 rounded-t bg-[#4387ff]"></span><span class="h-[58%] flex-1 rounded-t bg-[#4387ff]"></span><span class="h-[76%] flex-1 rounded-t bg-[#75f3d8]"></span><span class="h-[92%] flex-1 rounded-t bg-[#75f3d8]"></span><span class="h-full flex-1 rounded-t bg-[#b5fff0]"></span>
//             </div>
//           </div>
//           <div class="grid grid-cols-2 gap-3 border-t border-white/10 pt-5"><div class="rounded-xl bg-white/8 p-3"><p class="font-label-sm text-white/45">Clarity score</p><p class="mt-1 font-label-md text-white">94 / 100</p></div><div class="rounded-xl bg-white/8 p-3"><p class="font-label-sm text-white/45">Next insight</p><p class="mt-1 font-label-md text-[#75f3d8]">Ready now</p></div></div>
//         </div>
//       </div>