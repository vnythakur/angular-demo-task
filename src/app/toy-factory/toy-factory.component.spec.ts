import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyFactoryComponent } from './toy-factory.component';

describe('ToyFactoryComponent', () => {
  let component: ToyFactoryComponent;
  let fixture: ComponentFixture<ToyFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToyFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToyFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
