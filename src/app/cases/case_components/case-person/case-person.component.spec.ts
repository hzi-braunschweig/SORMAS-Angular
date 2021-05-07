import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { CasePersonComponent } from './case-person.component';

describe('CasePersonComponent', () => {
  let component: CasePersonComponent;
  let fixture: ComponentFixture<CasePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasePersonComponent],
      imports: [HttpClientTestingModule, MatDialogModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
