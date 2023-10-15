import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadProductosComponent } from './entidad-productos.component';

describe('EntidadProductosComponent', () => {
  let component: EntidadProductosComponent;
  let fixture: ComponentFixture<EntidadProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadProductosComponent]
    });
    fixture = TestBed.createComponent(EntidadProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
