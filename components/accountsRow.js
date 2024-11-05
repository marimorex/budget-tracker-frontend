import currencyFormatter from "../helpers/currencyFormatter";

const AccountsRow = ({account}) => {
    return (
        <>
            <tr>
                <th>{account.account_type}</th>
                <th>{account.name}</th>
                <th>{currencyFormatter.format(account.balance)}</th>
                <th>{account.currency}</th>

            </tr>
        </>
    );
}

export default AccountsRow;