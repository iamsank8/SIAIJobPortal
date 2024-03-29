import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostedJobsComponent } from "./posted-jobs/posted-jobs.component";
import { ShortlistedCandidatesComponent } from "./short-listed-candidates/short-listed-candidates.component";
import { InterviewsComponent } from "./interviews/interviews.component";
import { MaterialModule } from "../core/material.module";

@NgModule({
  declarations: [
    PostedJobsComponent,
    ShortlistedCandidatesComponent,
    InterviewsComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    PostedJobsComponent,
    ShortlistedCandidatesComponent,
    InterviewsComponent
  ]
})
export class JobsModule {}
