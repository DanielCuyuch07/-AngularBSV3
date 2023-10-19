import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadUserArchivosComponent } from './entidad-user-archivos.component';

describe('EntidadUserArchivosComponent', () => {
  let component: EntidadUserArchivosComponent;
  let fixture: ComponentFixture<EntidadUserArchivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntidadUserArchivosComponent]
    });
    fixture = TestBed.createComponent(EntidadUserArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
