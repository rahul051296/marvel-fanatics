import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicNovelComponent } from './graphic-novel.component';

describe('GraphicNovelComponent', () => {
  let component: GraphicNovelComponent;
  let fixture: ComponentFixture<GraphicNovelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicNovelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicNovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
