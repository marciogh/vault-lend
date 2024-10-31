"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoanService_1 = __importDefault(require("./service/LoanService"));
const Person_1 = require("./model/Person");
const LoanApplication_1 = require("./model/LoanApplication");
const router = express_1.default.Router();
router.get('/loanProposals', (req, res) => {
    var person = {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "24/02/1956",
        address: "60 Burraneer Bay Road",
        employmentStatus: Person_1.EmploymentStatus.Employed,
        employer: "Apple",
        annualIncome: 170000,
        email: "johndoe@gmail.com",
        mobile: "+461998271224"
    };
    var loanApplication = {
        loanPurpose: LoanApplication_1.LoanPurpose.Vehicle,
        loanTermYears: 5,
        amount: 5000,
        deposit: 500,
    };
    res.json(LoanService_1.default.getLoanProposals(person, loanApplication));
});
exports.default = router;
//# sourceMappingURL=api.js.map