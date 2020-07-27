import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CulturePage } from './culture.page';

describe('CulturePage', () => {
  let component: CulturePage;
  let fixture: ComponentFixture<CulturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CulturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
