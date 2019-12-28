import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { MaskPipe } from './mask.pipe';
import { LoopPipe } from './loop.pipe';
import { TestService } from './test.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WelcomePipe,
        MaskPipe,
        LoopPipe
      ],
      providers:[
        TestService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PipesDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PipesDemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('.content span').textContent).toContain('PipesDemo app is running!');
    expect(compiled.querySelector('h1').textContent).toContain('PipesDemo');
  });

  it('friendlist should contain vinit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;    
    expect(app.friends.indexOf('vinit') > 0).toEqual(true);    
  });

  it('test sum meyhod', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;    
    const sum = app.sum(1,4);
    expect(sum).toEqual(5);
  });
});