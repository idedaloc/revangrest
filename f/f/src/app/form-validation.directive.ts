import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appFormValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: FormValidationDirective, multi:true}]
})
export class FormValidationDirective implements Validator{

  @Input('appFormValidation') inputWord: string;

  validate(control: AbstractControl): {[key: string]:any} {
    console.log(this.inputWord ? forbideenBadWord(new RegExp(this.inputWord,'i'))(control) : null);
    return this.inputWord ? forbideenBadWord(new RegExp(this.inputWord,'i'))(control) : null;
  }

  constructor() { }

}

export function forbideenBadWord(re: RegExp):ValidatorFn{
  return (control: AbstractControl): {[key: string]: any} => {
      const fb = re.test(control.value);
      console.log("*********");
      console.log(fb);
      return fb ? {'fb': {value: control.value}} : null;
  };
}
