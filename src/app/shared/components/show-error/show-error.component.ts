import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.scss'],
})
export class ShowErrorComponent implements OnInit {
  @Input() ctrl: FormControl;

  ERROR_MESSAGE = {
    required: () => `This field is required`,
    minlength: par => `Min ${par.requiredLength} chars is required`,
    maxlength: par => `Max ${par.requiredLength} chars is required`,
    min: par => `Min value ${par.min} is required`,
    max: par => `Max value ${par.max} is required`,
    pattern: () => `Enter only number`,
  };

  constructor() {}

  ngOnInit() {}

  shouldShowErrors(): boolean {
    return this.ctrl && this.ctrl.errors && this.ctrl.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.ctrl.errors).map(err =>
      this.ERROR_MESSAGE[err](this.ctrl.getError(err))
    );
  }
}
