import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueBookPageComponent } from './issue-book-page.component';

describe('IssueBookPageComponent', () => {
  let component: IssueBookPageComponent;
  let fixture: ComponentFixture<IssueBookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueBookPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
