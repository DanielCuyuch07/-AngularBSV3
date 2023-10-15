import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadDepartamentosComponent } from './entidad-departamentos.component';

describe('EntidadDepartamentosComponent', () => {
  let component: EntidadDepartamentosComponent;
  let fixture: ComponentFixture<EntidadDepartamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadDepartamentosComponent]
    });
    fixture = TestBed.createComponent(EntidadDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
