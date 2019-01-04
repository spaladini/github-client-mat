export class Issue {
    id: number;
    number: number;
    status: string;
    title: string;
    body: string;
    assignee: User;
    createdBy: User;
}

export class User {
    login: string;
    id: number;
    name: string;
}
