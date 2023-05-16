import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CadastroRegiaoService } from '../cadastro-regiao.service';

@Component({
  selector: 'app-cadastro-regiao',
  templateUrl: './cadastro-regiao.component.html',
  styleUrls: ['./cadastro-regiao.component.scss']
})
export class CadastroRegiaoComponent implements OnInit {

  regiaoForm: FormGroup;
  listaCidades=[];

  constructor(private fb: FormBuilder, private cadastroRegiaoService: CadastroRegiaoService) {}

  ngOnInit() {
    this.setFormRegiao();
    this.getListaCidades();
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

  getListaCidades() {
    this.cadastroRegiaoService.getListaCidades().subscribe(
      (result:any) => {
        this.listaCidades = result
       },error => {
        console.log("error", error)
      }
    )
  }
}
