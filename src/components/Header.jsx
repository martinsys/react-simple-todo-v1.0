import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const Header = ({ toggleTheme, theme, version }) => {


    return (
        <header>
            <div className="d-flex justify-content-between align-items-center py-4 ">
                <h1 className="position-relative">TODO
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger version">
                        v{version}
                      </span>
                </h1>
                <button className="btn p-0" onClick={toggleTheme}>
                    <img src={theme === 'dark' ? moonIcon : sunIcon} alt="theme toggle" id="theme-icon"/>
                </button>
            </div>
        </header>
    )
}
export default Header