import { Component } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent {

  // tutorials?: Tutorial[];
  // currentTutorial: Tutorial = {};
  // currentIndex = -1;
  // title = '';

  // constructor(private tutorialService: TutorialService) { }

  // ngOnInit(): void {
  //   this.retrieveTutorials();
  // }

  // retrieveTutorials(): void {
  //   this.tutorialService.getAll()
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // refreshList(): void {
  //   this.retrieveTutorials();
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;
  // }

  // setActiveTutorial(tutorial: Tutorial, index: number): void {
  //   this.currentTutorial = tutorial;
  //   this.currentIndex = index;
  // }

  // removeAllTutorials(): void {
  //   this.tutorialService.deleteAll()
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.refreshList();
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  // searchTitle(): void {
  //   this.currentTutorial = {};
  //   this.currentIndex = -1;

  //   this.tutorialService.findByTitle(this.title)
  //     .subscribe({
  //       next: (data) => {
  //         this.tutorials = data;
  //         console.log(data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }


}
