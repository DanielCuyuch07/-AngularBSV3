import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadMaestrosComponent } from './entidad-maestros.component';

describe('EntidadMaestrosComponent', () => {
  let component: EntidadMaestrosComponent;
  let fixture: ComponentFixture<EntidadMaestrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadMaestrosComponent]
    });
    fixture = TestBed.createComponent(EntidadMaestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
