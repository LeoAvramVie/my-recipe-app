import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeService} from '../recipe.service';
import {Store} from '@ngrx/store';


describe('Component: Recipe-Details', () => {
  let component: RecipeDetailComponent;
  let fixture : ComponentFixture<RecipeDetailComponent>;
  let testBedService: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetailComponent],
      providers: [RecipeService, Store]
    });
    fixture = TestBed.createComponent(RecipeDetailComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(RecipeDetailComponent);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    });
  });

