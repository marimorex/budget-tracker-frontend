import { useState } from "react";
import AccountsRow from "./accountsRow";

const accountsArray =[
    {
        "account_id": 1,
        "user_id": 1,
        "name": "current 1",
        "balance": "100.00",
        "currency": "EURO",
        "account_type": "CURRENT",
    },
    {
        "account_id": 2,
        "user_id": 1,
        "name": "savings 1",
        "balance": "100.00",
        "currency": "EURO",
        "account_type": "SAVINGS",
        "interest_rate": 3,
    },
    {
        "account_id": 3,
        "user_id": 1,
        "name": "cash 1",
        "balance": "100.00",
        "currency": "EURO",
        "account_type": "CASH",
    },
]

const AccountsList = () => {
    const [accounts, setAccounts] = useState(accountsArray);

    const addAccount = () => {
        setAccounts([
            ...accounts,
            {
                "account_id": 4,
                "user_id": 1,
                "name": "savings 3",
                "balance": "1000.999",
                "currency": "EURO",
                "account_type": "SAVINGS",
                "interest_rate": 3,
            }
        ]);
    };
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    List of Accounts
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(a =>(
                        <AccountsRow key={a.id} account={a} />
                    ))}
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={addAccount}>
                Add
            </button>
        </>
    );
}

export default AccountsList;


//some = () => {}; this is an arrow function 