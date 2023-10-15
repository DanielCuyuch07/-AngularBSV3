import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadGenerosComponent } from './entidad-generos.component';

describe('EntidadGenerosComponent', () => {
  let component: EntidadGenerosComponent;
  let fixture: ComponentFixture<EntidadGenerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadGenerosComponent]
    });
    fixture = TestBed.createComponent(EntidadGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
