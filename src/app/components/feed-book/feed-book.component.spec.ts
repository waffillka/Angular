import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBookComponent } from './feed-book.component';

describe('FeedBookComponent', () => {
  let component: FeedBookComponent;
  let fixture: ComponentFixture<FeedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
