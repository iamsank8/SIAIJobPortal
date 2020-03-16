import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PostedJobsComponent } from "./posted-jobs.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from "src/app/core/services/data.service";

describe("PostedJobsComponent", () => {
  let component: PostedJobsComponent;
  let fixture: ComponentFixture<PostedJobsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
      declarations: [PostedJobsComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PostedJobsComponent);
    component = fixture.componentInstance;
  });

  it(`should create component`, () => {
    expect(component).toBeTruthy();
  });
});
