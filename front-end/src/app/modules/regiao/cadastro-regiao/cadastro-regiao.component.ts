import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-cadastro-regiao',
  templateUrl: './cadastro-regiao.component.html',
  styleUrls: ['./cadastro-regiao.component.scss']
})
export class CadastroRegiaoComponent implements OnInit {

  regiaoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setFormRegiao()
  }

  setFormRegiao() {
    this.regiaoForm = this.fb.group({
      regiao: ['', Validators.required],
      cidades: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get cidades() {
    return this.regiaoForm.get('cidades') as FormArray;
  }

  addCidades() {
    this.cidades.push(this.fb.control(''));
  }
}
