export enum EmploymentStatus { Employed, SelfEmployed, Unemployed }

export default interface Person {

    firstName:String
    lastName:String
    dateOfBirth:String
    email:String
    mobile:String
    address:String
    employmentStatus:EmploymentStatus
    employer:String
    annualIncome:number

}