import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAuthorComponent } from './feed-author.component';

describe('FeedAuthorComponent', () => {
  let component: FeedAuthorComponent;
  let fixture: ComponentFixture<FeedAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
