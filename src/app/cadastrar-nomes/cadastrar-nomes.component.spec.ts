import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNomesComponent } from './cadastrar-nomes.component';

describe('CadastrarNomesComponent', () => {
  let component: CadastrarNomesComponent;
  let fixture: ComponentFixture<CadastrarNomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarNomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarNomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
