import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter();

  disabledCss = "text-white bg-blue-400 dark:bg-blue-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center";
  enabledCss = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

  constructor() { }
}
