import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { Customer } from "../model/Customer"

var customer: Customer

function LoanDetails() {

    return (
        <div>
            <h1>Loan Details</h1>
            <Form method="post" action="/loanDetails">
                <p>
                    <span>Loan Amount</span>
                        <input
                            placeholder="Loan Amount"
                            type="text"
                            name="loanAmount"
                            defaultValue={customer?.firstName}
                        />
                </p>
                <button>Submit</button>
            </Form>
        </div>
    )
}

export async function action({ request }:ActionFunctionArgs) {
    const formData = await request.formData()
    console.log(Object.fromEntries(formData))
    return redirect("/");
}

export default Object.assign(LoanDetails);