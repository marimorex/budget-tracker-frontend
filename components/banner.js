import { useContext } from "react";
import styles from "./banner.module.css"
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

const Banner = (props) => {
   const {navigate} = useContext(navigationContext);
    return (
        <header className="row">
            <div className="col-4 mb-4">
                <img src="./logo.png" alt="logo" className= {styles.logo} onClick={() => navigate(navValues.home)} />
            </div>
            <div className="col-8 mt-5 themeFontColor" >
                {props.HeaderText}
            </div>

        </header>
    );
};

export default Banner;