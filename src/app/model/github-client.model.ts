export class Issue {
    id: number;
    number: number;
    state: string;
    title: string;
    body: string;
    assignee: User;
    assignees: Array<User>;
    created_at: Date;
}

export class User {
    login: string;
    id: number;
    name: string;
}
