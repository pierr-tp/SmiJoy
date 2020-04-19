import React from "react";
import * as firebase from "firebase";
import "../Main.css";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLgtBtn: false
        }
        this.handleToSettings = this.handleToSettings.bind(this);
    }

    handleToSettings() {
        if(this.state.showLgtBtn === false) {
            this.setState({
                showLgtBtn: true
            });
        } else {
            this.setState({
                showLgtBtn: false
            });
        }
    }

    render() {
            return (
            <div className="v42 ps42 s42 c40">
                <div className="ps43">
                </div>
                <div className="v43 ps44 s43 c41">
                    <div className="ps45 v44 s44">
                        <div className="v45 ps46 s45 c42">
                            <div className="v46 ps47 s46 c43">
                                <a className="a3">
                                    <img src={require("../Images/SmiJoy-icone.gif")} alt=""
                                         className="js i23"/>
                                </a>
                            </div>
                            <div className="v47 ps48 s47 c44">
                                <div className="v48 ps49 s48 c45">
                                    <div className="v49 ps50 s49 w4">
                                        <div className="v50 ps51 s50 c46">
                                            <input type="text" placeholder="Rechercher" name="texte"
                                                   className="input3"/>
                                        </div>
                                        <div className="v51 ps52 s51 c47">
                                            <picture className="i25">
                                                <img src={require("../Images/search.png")} alt=""
                                                     className="js2 i24"/>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="v52 ps53 s52 c48">
                                <picture className="i27">
                                    <a><img
                                        src={require("../Images/79369497_604676463620308_7656146566557728768_n.jpg")}
                                        alt=""
                                        className="js3 i26"/></a>
                                </picture>
                            </div>
                            <div className="v53 ps54 s53 c49">
                                <picture className="i29">
                                    <img src={require("../Images/notification.png")} alt="" className="js4 i28"/>
                                </picture>
                            </div>
                            <div className="v54 ps55 s54 c50">
                                <picture onClick={this.handleToSettings} className="i31">
                                    <img src={require("../Images/cog.png")} alt="" className="js5 i30"/>
                                </picture>
                                <div>
                                    {this.state.showLgtBtn === true ?
                                        <input onClick={firebase.auth().signOut()} className="lgtBtn b1 " type="button"
                                               value="Se déconnecter"/> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
