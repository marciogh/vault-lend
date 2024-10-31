export enum LoanPurpose {
    Vehicle,
    HomeImprovement,
}
export default interface LoanApplication {
    amount:number
    deposit:number
    loanPurpose:LoanPurpose
    loanTermYears:number
}