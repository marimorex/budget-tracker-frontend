const { default: navValues } = require("@/helpers/navValues");
const { default: AccountList } = require("./accountList");
const { default: Account } = require("./account");

const ComponentPicker = ({currentNavLocation}) => {
    switch(currentNavLocation) {
        case navValues.home:
            return <AccountList />;
        case navValues.account:
            return <Account/>;
        default:
            return (
                <h3>
                    No Component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;