import loadingStatus from "@/helpers/loadingStatus";

const { useState, useCallback } = require("react");

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const get = useCallback (async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
            const response = await fetch(url);
            const result = await response.json();
            setLoadingState(loadingStatus.loaded);
            return result;
        } catch (error) {
            setLoadingState(loadingStatus.hasErrored);
        }

    },[url]);
 return {get, loadingState};
};

export default useGetRequest;