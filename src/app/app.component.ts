import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public readonly title = input<string>('default title');
  public readonly color = input<string>('lightcoral');

  public readonly clicked = output<string>();
}
