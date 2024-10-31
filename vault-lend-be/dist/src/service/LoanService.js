"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LoanService() {
}
function getLoanProposals(person, loanApplication) {
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
    ];
}
exports.default = Object.assign(LoanService, { getLoanProposals });
//# sourceMappingURL=LoanService.js.map