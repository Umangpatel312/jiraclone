import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { IssueService } from 'src/app/shared/issue.service';
import { BoardSection, IssueStatus } from 'src/app/shared/issue/issue.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  providers: [IssueService],
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faChevronCircleLeft = faChevronCircleLeft;
  faTwitter = faTwitter;
  faGithub = faGithub;
  canFilterResolved = false;
  projectMemberUrls: string[] = [
    '../../../assets/Images/siling.png',
    '../../../assets/Images/captainAmerica.jpeg',
    '../../../assets/Images/sharingan.png',
    '../../../assets/Images/escanor.png',
  ];

  boardSections: BoardSection[];
  filteredSections: BoardSection[];
  showClearButton = false;
  clearSearch = false;
  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.getProjectSections().subscribe((sections) => {
      this.boardSections = sections;
      this.filteredSections = this.boardSections;
    });
  }

  filter(): void {
    const sections = JSON.parse(JSON.stringify(this.boardSections));

    this.canFilterResolved = !this.canFilterResolved;

    if (this.canFilterResolved) {
      this.showClearButton = true;
      sections.map((s) => this.eliminateResolved(s));
      this.filteredSections = sections;
    } else {
      this.filteredSections = this.boardSections;
    }
  }
  filterTitle(event: string): void {
    this.showClearButton = event.length >= 2 ? true : false;
    const sections = JSON.parse(JSON.stringify(this.boardSections));

    sections.map((s) => this.findByTitle(s, event));
    this.filteredSections = sections;
  }
  eliminateResolved(section: BoardSection): void {
    section.issues = section.issues.filter(
      (i) => i.status !== IssueStatus.COMPLETED
    );
  }
  findByTitle(section: BoardSection, term: string): void {
    section.issues = section.issues
      .filter(
        (issue) => issue.title.toLowerCase().indexOf(term.toLowerCase()) > -1
      )
      .slice(0, 10);
  }

  clearAll(): void {
    this.filteredSections = this.boardSections;
    this.showClearButton = false;
    this.clearSearch = true;
  }
}
