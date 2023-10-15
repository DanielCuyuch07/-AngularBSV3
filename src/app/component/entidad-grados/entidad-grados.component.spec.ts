import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadGradosComponent } from './entidad-grados.component';

describe('EntidadGradosComponent', () => {
  let component: EntidadGradosComponent;
  let fixture: ComponentFixture<EntidadGradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadGradosComponent]
    });
    fixture = TestBed.createComponent(EntidadGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
