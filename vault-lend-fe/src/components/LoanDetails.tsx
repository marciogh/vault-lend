import { Form, ActionFunctionArgs, redirect, Link } from "react-router-dom";

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
                        />
                </p>
                <button>Submit</button>
            </Form>
            <Link to="/personalDetails">Previous</Link>
        </div>
    )
}

export async function action({ request }:ActionFunctionArgs) {
    const formData = await request.formData()
    return redirect("/loanProposals");
}

export default Object.assign(LoanDetails);