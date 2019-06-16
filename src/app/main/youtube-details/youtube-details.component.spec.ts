import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeDetailsComponent } from './youtube-details.component';

describe('YoutubeDetailsComponent', () => {
  let component: YoutubeDetailsComponent;
  let fixture: ComponentFixture<YoutubeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
