const accounts =[
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
                    </tr>
                </thead>
                <tbody>
                    {accounts.map(a =>(
                        <tr key={a.account_id}>
                            <th>{a.account_type}</th>
                            <th>{a.name}</th>
                            <th>{a.balance}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default AccountsList;