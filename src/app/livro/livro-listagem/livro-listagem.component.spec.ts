import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroListagemComponent } from './livro-listagem.component';

describe('LivroListagemComponent', () => {
  let component: LivroListagemComponent;
  let fixture: ComponentFixture<LivroListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
