import { useContext } from "react";
import { navigationContext } from "./app";

const Account = () => {
    const {instance : account} = useContext(navigationContext);
    return (
        <>
            <div className="row">
                <h5 className="themeFontColor text-center">Name { account.name}</h5>
            </div>

            <div className="row">
               <div className="col-4">
                    <div className="row"> {account.account_type}</div>
               </div>
               <div className="col-4">
                    <div className="row"> <h4>{account.balance}</h4></div>
               </div>
               <div className="col-4">
                    <div className="row"> {account.currency}</div>
               </div>
            </div>

            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    List of Transactions
                </h5>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>...</th>

                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </>

)};

export default Account;