export class User {
    login: string;
    id: number;
    name: string;
}

export class Issue {
    id: number;
    number: number;
    title: string;
    state: string;
    body: string;
    created_at: Date;
    user: User;
    assignee: User;
    assignees: Array<User>;
}
