import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SeletorCidadesComponent),
  multi: true,
};

@Component({
  selector: 'app-seletor-cidades',
  templateUrl: './seletor-cidades.component.html',
  styleUrls: ['./seletor-cidades.component.scss'],
  providers: [VALUE_ACCESSOR],
})
export class SeletorCidadesComponent implements ControlValueAccessor {
  @Input() listaCidades = [];

  @Input() indexForm = 0;
  onChange: (value: any) => void = () => {};
  onTouch: () => void = () => {};
  touched = false;
  disabled = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    console.log('writeValue', value);
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouch) {
    this.onTouch = onTouch;
  }
}
