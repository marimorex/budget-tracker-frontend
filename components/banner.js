import styles from "./banner.module.css"

const Banner = (props) => {
    return (
        <header className="row">
            <div className="col-4 mb-4">
                <img src="./logo.png" alt="logo" className= {styles.logo}/>
            </div>
            <div className="col-8 mt-5 themeFontColor" >
                {props.HeaderText}
            </div>

        </header>
    );
};

export default Banner;