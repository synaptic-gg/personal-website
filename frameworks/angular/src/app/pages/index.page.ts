import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class = " flex items-center justify-center min-h-50 lg:min-h-100">
  <p class="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">This part is written in <strong>Angular</strong></p>
</div>
  `,

})
export default class HomeComponent {}
