import loadingStatus from "@/helpers/loadingStatus";
import AccountRow from "./accountRow";
import useAccounts from "@/hooks/useAccounts";
import LoadingIndicator from "./loadingIndicator";

const AccountList = () => {
    const {accounts, setAccounts, loadingState} = useAccounts();

    if (loadingState !== loadingStatus.loaded)
        return <LoadingIndicator loadingState={loadingState}/>


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
                        <AccountRow key={a.account_id} account={a}  />
                    ))}
                </tbody>
            </table>

            <button className="btn btn-primary" onClick={addAccount}>
                Add
            </button>
        </>
    );
}

export default AccountList;


//some = () => {}; this is an arrow function 