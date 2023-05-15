import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SeletorCidadesComponent),
  multi: true
};

@Component({
  selector: 'app-seletor-cidades',
  templateUrl: './seletor-cidades.component.html',
  styleUrls: ['./seletor-cidades.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SeletorCidadesComponent implements ControlValueAccessor  {

  @Input() indexForm = 0;
  value: any;
  onChange = (value: any) => {};
  onTouch = () => {};
  touched = false;
  disabled = false;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouch();
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch) {
    this.onTouch = onTouch;
  }

}
