import Banner from "./banner";
import AccountsList from "./accountList";
import Account from "./account";
import React, { useCallback, useState } from "react";
import navValues from "@/helpers/navValues";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext(navValues.home);

const App = () => {
    const navigate = useCallback(
        (navTo, instance) => setNav({current: navTo, instance, navigate}),
        []
    );

    const [nav, setNav] = useState({current: navValues.home, navigate});

    return (
        <>
        <navigationContext.Provider  value={nav}>
            <Banner HeaderText="Budget Tracker, details are important"/>
            <ComponentPicker currentNavLocation={nav.current}/>
        </navigationContext.Provider>
        </>
    );

};

export {navigationContext};

export default App;