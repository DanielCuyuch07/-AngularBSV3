import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadClasesComponent } from './entidad-clases.component';

describe('EntidadClasesComponent', () => {
  let component: EntidadClasesComponent;
  let fixture: ComponentFixture<EntidadClasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadClasesComponent]
    });
    fixture = TestBed.createComponent(EntidadClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
