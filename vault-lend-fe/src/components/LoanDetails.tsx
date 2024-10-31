import { Form, ActionFunctionArgs, redirect, Link } from "react-router-dom";
import ReactSlider from 'react-slider'

function LoanDetails() {

    return (
        <div>
            <h1>Loan Details</h1>
            <Form method="post" action="/loanDetails">
                <Link to="/personalDetails"><button>Previous</button></Link>
                <button>Apply</button>
                <p>
                    <span>Loan Amount</span>
                        <input
                            placeholder="Loan Amount"
                            type="text"
                            name="loanAmount"
                        />
                </p>
            </Form>
            
        </div>
    )
}

export async function action({ request }:ActionFunctionArgs) {
    const formData = await request.formData()
    return redirect("/loanProposals");
}

export default Object.assign(LoanDetails);