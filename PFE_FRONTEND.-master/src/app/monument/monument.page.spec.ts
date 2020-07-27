import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonumentPage } from './monument.page';

describe('MonumentPage', () => {
  let component: MonumentPage;
  let fixture: ComponentFixture<MonumentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
