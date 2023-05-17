import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CadastroRegiaoService } from '../cadastro-regiao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-regiao',
  templateUrl: './cadastro-regiao.component.html',
  styleUrls: ['./cadastro-regiao.component.scss'],
})
export class CadastroRegiaoComponent implements OnInit {
  regiaoForm: FormGroup;
  listaCidades = [];
  idRegiao = '';

  constructor(
    private fb: FormBuilder,
    private cadastroRegiaoService: CadastroRegiaoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setFormRegiao();
    this.getListaCidades();
    this.idRegiao = this.route.snapshot.paramMap.get('id');
    this.getRegiao(this.idRegiao)
  }

  setFormRegiao() {
    this.regiaoForm = this.fb.group({
      nome: ['', Validators.required],
      cidades: this.fb.array([this.fb.control('', Validators.required )]),
    });
  }

  get cidades() {
    return this.regiaoForm.get('cidades') as FormArray;
  }

  addCidades() {
    this.cidades.push(this.fb.control('', Validators.required ));
  }

  getListaCidades() {
    this.cadastroRegiaoService.getListaCidades().subscribe(
      (result: any) => {
        this.listaCidades = result;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getRegiao(id) {
    this.cadastroRegiaoService.getRegiao(id).subscribe(
      (result: any) => {
        console.log('regiao get', result)
        this.setDadosRegiao(result)
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  setDadosRegiao(regiao) {
    this.regiaoForm.patchValue({
      nome: regiao.nome
    });
    regiao.cidades.forEach(cidade => {
      this.cidades.push(this.fb.control(cidade, Validators.required ));
    });

  }

  salvarRegiao() {
    if (this.regiaoForm.valid) {
      this.cadastroRegiaoService.SaveRegiao(this.regiaoForm.value).subscribe(
        (result) => {
          alert('Salvo com sucesso!');
        },
        (error) => {
          console.log('salvarRegiao', error);
        }
      );
    } else {
      this.verificaValidacoesForm(this.regiaoForm);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }
}
