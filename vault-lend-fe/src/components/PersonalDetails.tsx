import { Form, ActionFunctionArgs, redirect } from "react-router-dom";
import { Customer } from "../model/Customer"

var customer: Customer

function PersonalDetails() {

    return (
        <div>
            <h1>Personal Details</h1>
            <Form method="post" action="/personalDetails">
                <p>
                    <span>First Name</span>
                        <input
                            placeholder="First Name"
                            type="text"
                            name="firstName"
                            defaultValue={customer?.firstName}
                        />
                </p>
                <p>
                    <span>Last Name</span>
                        <input
                            placeholder="Last Name"
                            type="text"
                            name="lastName"
                            defaultValue={customer?.firstName}
                        />
                </p>
                <button>Next</button>
            </Form>
        </div>
    )
}

export async function action({ request }:ActionFunctionArgs) {
    const formData = await request.formData()
    console.log(Object.fromEntries(formData))
    return redirect("/loanDetails");
}

export default Object.assign(PersonalDetails);