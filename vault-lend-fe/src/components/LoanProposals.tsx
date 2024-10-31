import { useLoaderData } from "react-router-dom";

function LoanProposals() {

    const proposals:Array<any> = useLoaderData() as Array<any>

    return (
        <div>
            <h1>Loan Proposals</h1>
            <table>
                <tr>
                    <td>Lender</td>
                    <td>Repayment</td>
                    <td>InterestRate</td>
                    <td>Fees</td>
                </tr>
                {
                    proposals.map(p => {
                        return (
                            <tr key={p.lender}>
                            <td>{ p.lender }</td>
                            <td>{ p.monthlyRepayment }</td>
                            <td>{ p.interestRate }</td>
                            <td>{ p.fees }</td>
                            </tr>
                        );
                    }
                    )
                }
            </table>
        </div>
    )
}

export async function loader() {
    return fetch('http://vault-lend.marciogh.com:8080/v1/loanProposals')
        .then(response => response.json())
}

export default Object.assign(LoanProposals);