import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadUniformesComponent } from './entidad-uniformes.component';

describe('EntidadUniformesComponent', () => {
  let component: EntidadUniformesComponent;
  let fixture: ComponentFixture<EntidadUniformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadUniformesComponent]
    });
    fixture = TestBed.createComponent(EntidadUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
