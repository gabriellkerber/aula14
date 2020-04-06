import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNomesComponent } from './listar-nomes.component';

describe('ListarNomesComponent', () => {
  let component: ListarNomesComponent;
  let fixture: ComponentFixture<ListarNomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNomesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
