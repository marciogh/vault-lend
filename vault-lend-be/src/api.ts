import express, { Request, Response, Router } from 'express';
import LoanService from './service/LoanService';
import Person, { EmploymentStatus } from './model/Person';
import LoanApplication, { LoanPurpose } from './model/LoanApplication';

const router:Router = express.Router();

router.get(
    '/loanProposals', (req: Request, res: Response) => {
        var person:Person = {
            firstName: "John",
            lastName: "Doe",
            dateOfBirth: "24/02/1956",
            address: "60 Burraneer Bay Road",
            employmentStatus: EmploymentStatus.Employed,
            employer: "Apple",
            annualIncome: 170000,
            email: "johndoe@gmail.com",
            mobile: "+461998271224"
        }
        var loanApplication:LoanApplication = {
            loanPurpose: LoanPurpose.Vehicle,
            loanTermYears: 5,
            amount: 5000,
            deposit: 500,
        }
        console.log(`got a ${loanApplication.amount} loan request from ${person.firstName}`);
        res.json(LoanService.getLoanProposals(person, loanApplication))
    }
)

export default router;