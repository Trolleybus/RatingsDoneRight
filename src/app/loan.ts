export class Loan {
    id: number;
    title: string;
    amount: number;
    isApproved: boolean = false;
    isVoted: boolean = false;
    applicationDate: Date;
    applicant: string;
    percentYes: number;
    percentNo: number;
    percentUndecided: number;
    interestRate: number;
    friends: string[];
    description: string;
    period: number;
}
