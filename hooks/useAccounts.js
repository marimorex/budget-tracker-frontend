import loadingStatus from "@/helpers/loadingStatus";
import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const {get, loadingState} = useGetRequest("http://localhost:8000/accounts");

    useEffect(() => {
        const fetchAccounts = async () => {
            const accounts = await get();
            setAccounts(accounts);

        };
        fetchAccounts();
    }, [get]);

    return {accounts, setAccounts, loadingState};
};

export default useAccounts;