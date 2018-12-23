import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImageContentComponent } from './upload-image-content.component';

describe('UploadImageContentComponent', () => {
  let component: UploadImageContentComponent;
  let fixture: ComponentFixture<UploadImageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadImageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadImageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
