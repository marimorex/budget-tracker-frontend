import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const AccountRow = ({account}) => {
    const {navigate} = useContext(navigationContext);

    return (
        <tr onClick={ () => navigate(navValues.account, account)}>
            <th>{account.account_type}</th>
            <th>{account.name}</th>
            <th>{currencyFormatter.format(account.balance)}</th>
            <th>{account.currency}</th>
        </tr>
    );
}

export default AccountRow;