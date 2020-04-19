import React from "react";
import "../Main.css";

class Ads extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="v79 ps80 s79 c74">
                <div className="v80 ps81 s80 c75">
                    <div className="v81 ps82 s81 c76">
                        <picture className="i44">
                            <img src={require("../Images/72bc55c499738715cb3d2dcbef70c.png")} alt="" className="js12 i43"/>
                        </picture>
                    </div>
                    <div className="v82 ps83 s82 c77">
                        <p className="p21 f23">Mcdonald’s</p>
                    </div>
                    <div className="v83 ps84 s83 c78">
                        <picture className="i46">
                            <img src={require("../Images/open-menu.png")} alt="" className="js13 i45"/>
                        </picture>
                    </div>
                </div>
                <div className="v84 ps85 s84 c79">
                    <picture className="i48">
                        <img src={require("../Images/ad_34569857_f7d8ad071c21c09f_web.jpg")} alt="" className="js14 i47"/>
                    </picture>
                </div>
                <div className="v ps s c">
                    <p className="p f">Sponsorisé</p>
                </div>
            </div>
        );
    }

}

export default Ads;