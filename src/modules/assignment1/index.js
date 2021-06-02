import React from 'react';
import './index.css'
import moneyimg from "../../assets/img/moneyimg.png";

class Assignment1 extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="mainWrapper">
                    <div className="content">
                        <div className="contentHeading">
                            <p>
                                Save your
                        </p>
                            <p id="pbold">money now.</p>

                        </div>
                        <div className="restContent1">
                            Manage your company Bot in few easy steps, join our plan to
                            try a 360 experience of our service.
                    </div>
                        <div className="restContent1">
                            Start your 14 days of free Pro plan, you can always upgrade it
                            or stays with the Lite version for free.
                    </div>
                        
                        <img src={moneyimg} id={"moneyicon"} alt="img" height="40%" />
                    </div>
                    <div className="part2">
                        <div className="heading">
                            <span className="heading1">
                                Start now your free plan.
                        </span>
                            <span className="heading2 ">
                                Are you corrporate?
                                contact us
                        </span>
                        </div>
                        <div className="plans">

                            <div className="liteplan">
                                <div className="liteheading">
                                    <span id="lite">Lite</span>
                                    <span id="free">Free</span>
                                </div>
                                <p id="restriction">with restrictions</p>
                                <hr/>

                                    <div className="litecontent">
                                        <p id="plan">Plan includes:</p>
                                        <ul className="list">
                                            <li>Manage conversations directly from your website.</li>
                                            <li>Bot without the Ai service.</li>
                                            <li>Achieved chat for 30 days.</li>
                                            <li>Free, for always</li>
                                        </ul>
                                    </div>

                                    <div className="litefunc">
                                        <p className="view1">View all the features</p>
                                        <button type="button" id="btn">
                                            Start 14 days of free Pro plan
                                        </button>
                                    </div>
    
                            </div>
                            <div className="proplan">
                                    <div className="liteheading">
                                        <span id="pro">Pro</span>
                                        <span id="dollor">29$</span>
                                    </div>
                                    <p id="monthly">monthly</p>
                                    <hr></hr>

                                        <div className="litecontent">
                                            <p id="planpro">All of Lite plus:</p>
                                            <ul className="list">
                                                <li>
                                                    Bot without the AI that can recognise the user's behavious and
                                                    can automate the sentences.
                                    </li>
                                                <li>Unlimited conversional flows.</li>
                                                <li>Facebook, Twitter, Instagram and Linkedin integration.</li>
                                                <li>Achieved chat without limits.</li>
                                            </ul>
                                        </div>

                                        <div className="litefunc">
                                            <p className="view2">View all the features</p>
                                            <button type="button" id="btn2">
                                                Start 14 days of free Pro plan
                                </button>
                                        </div>
    
                        </div>

                                </div>
                            </div>
                        </div>

                    </div>
        );
    }
}

export default Assignment1;