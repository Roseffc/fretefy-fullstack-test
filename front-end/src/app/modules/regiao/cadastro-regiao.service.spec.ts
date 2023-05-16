/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CadastroRegiaoService } from './cadastro-regiao.service';

describe('Service: CadastroRegiao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroRegiaoService]
    });
  });

  it('should ...', inject([CadastroRegiaoService], (service: CadastroRegiaoService) => {
    expect(service).toBeTruthy();
  }));
});
