import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListTableComponent } from './publisher-list-table.component';

describe('PublisherListTableComponent', () => {
  let component: PublisherListTableComponent;
  let fixture: ComponentFixture<PublisherListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
