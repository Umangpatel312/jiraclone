export enum IssueStatus {
  BOOKMARKED = 'bookmarked',
  DELAYED = 'delayed',
  COMPLETED = 'completed',
}

export enum IssuePriority {
  HIGH = 'high',
  LOW = 'low',
}

export interface Issue {
  title: string;
  description: string;
  memberList: string[];
  taskTypeAndId: string;
  status: IssueStatus;
  priority: IssuePriority;
}

export interface BoardSection {
  title: string;
  issues: Issue[];
}
