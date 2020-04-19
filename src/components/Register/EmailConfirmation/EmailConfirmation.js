import React from "react";
import GetContacts from "../GetContacts/GetContacts";
import "./EmailConfirmation.css";

class EmailConfirmation extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            clickToNext: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            clickToNext: true
        });
    }

    render() {
        if(this.state.clickToNext === true){
            return <GetContacts/>
        } else {
            return (
                <div>
                    <div id="LFRD49MW5G7TYFD0Z">
                    </div>
                    <div className="v-conf ps-conf s-conf c-conf">
                        <div className="ps2-conf">
                        </div>
                        <div className="v2-conf ps3-conf s2-conf c2-conf">
                            <div className="ps4-conf v3-conf s3-conf">
                                <div className="v4-conf ps5-conf s4-conf c3-conf">
                                    <a className="a-conf"><img
                                        src={require("../images/smijoy-icone.gif")}
                                        alt=""
                                        className="js-conf i-conf"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps6-conf v5-conf s5-conf">
                        <div className="v6-conf ps7-conf s6-conf c4-conf">
                            <div className="v7-conf ps8-conf s7-conf c5-conf">
                                <p className="p-conf f-conf">Etape 1/3</p>
                            </div>
                            <div className="v8-conf ps9-conf s8-conf c6-conf">
                                <p className="p2-conf f2-conf">Confirmer votre adresse email.</p>
                            </div>
                            <div className="v9-conf ps10-conf s9-conf c7-conf">
                                <div className="v10-conf ps11-conf s10-conf c8-conf">
                                    <picture className="i3-conf">
                                        <img
                                            src={require("../images/check.jpg")}
                                            alt="" className="js2-conf i2-conf"/>
                                    </picture>
                                </div>
                                <div className="v11-conf ps12-conf s11-conf w-conf">
                                    <div className="v12-conf ps13-conf s12-conf c9-conf">
                                        <p className="p3-conf f3-conf">Nous vous avons envoyez un mail de confirmation
                                            à <span
                                                className="f4-conf">pierreturpin2005@gmail.com</span> afin de vérifier
                                            votre compte.</p>
                                    </div>
                                    <div className="v13-conf ps14-conf s13-conf c10-conf">
                                        <input type="text" placeholder="Code de vérification" name="texte"
                                               className="input-conf"/>
                                    </div>
                                </div>
                                <div className="v14-conf ps15-conf s14-conf c11-conf">
                                    <picture className="i5-conf">
                                        <img
                                            src={require("../images/letter.png")}
                                            alt="" className="js3-conf i4-conf"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="v15-conf ps16-conf s15-conf c12-conf">
                                <div className="v16-conf ps17-conf s16-conf c13-conf">
                                    <a className="f5-conf btn-conf v17-conf s17-conf">Renvoyer l’email<p></p></a>
                                </div>
                                <div className="v18-conf ps18-conf s18-conf c14-conf">
                                    <a onClick={this.handleClick} className="f6-conf btn2-conf v19-conf s19-conf">Continuer
                                        <p></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c15-conf">
                    </div>
                </div>
            );
        }
    }
}

export default EmailConfirmation;