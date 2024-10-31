import LoanProposal from '../model/LenderProposal';
import LoanApplication from '../model/LoanApplication';
import Person from '../model/Person';

function LoanService() {
}

function getLoanProposals(person:Person, loanApplication: LoanApplication): LoanProposal[] {
    console.log(person);
    console.log(loanApplication);
    return [
        {
            lender: "CommBank",
            monthlyRepayment: 100,
            interestRate: 650,
            fees: 500,
        },
        {
            lender: "WestPack",
            monthlyRepayment: 120,
            interestRate: 680,
            fees: 300,
        }
    ]
}

export default Object.assign(LoanService, { getLoanProposals});