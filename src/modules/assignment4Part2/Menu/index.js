import React from "react";
import "../index.css";
import logo from "../../../utils/images/assignmen4/img/xcoinslogo.svg";
function Menu() {
    return (
        <div className={"menu"}>
            <div className={"logo"}>
                <span>
                    <img src={logo} alt={"logo"} />
                </span>
            </div>
            <div className={"topicatext"}>
                {"Topics"}
            </div>
            <div className={"menuContent"}>
                <ul>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Affliliate Program"}</a>
                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Buy & Sell Cryptocurrencies"}</a>
                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Contact Us"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"My Xcoins Account"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Orders"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Payment Methods"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Security"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Verification"}</a>

                    </li>
                    <li>
                        <a href={"#"} className={"menuheading"}>{"Wallet"}</a>

                    </li>

                </ul>




            </div>
        </div>


    );
}


export default Menu;
