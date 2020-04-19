import React from "react";
import Contacts from "./Contacts";
import "./ShowContacts.css";

class ShowContacts extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
            <div className="v-sh ps-sh s-sh c-sh">
                <div className="ps2-sh">
                </div>
                <div className="v2 ps3-sh s2-sh c2-sh">
                    <div className="ps4-sh v3-sh s3-sh">
                        <div className="v4-sh ps5-sh s4-sh c3-sh">
                            <a className="a-sh"><img
                                src={require("../images/smijoy-icone.gif")} alt=""
                                className="js-sh i-sh"/></a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="ps6-sh v5-sh s5-sh">
            <div className="v6-sh ps7-sh s6-sh c4-sh">
                <div className="v7-sh ps8-sh s7-sh w-sh">
                    <div className="v8-sh ps9-sh s8-sh c5-sh">
                        <div className="v9-sh ps10-sh s9-sh c6-sh">
                            <div className="v10-sh ps11-sh s10-sh c7-sh">
                                <picture className="i3-sh">
                                        <img
                                            src={require("../images/search.png")}
                                            alt="" className="js2-sh i2-sh"/>
                                </picture>
                            </div>
                            <div className="v11-sh ps12-sh s11-sh c8-sh">
                                <p className="p-sh f-sh">Etape 2/3</p>
                            </div>
                            <div className="v12-sh ps13-sh s12-sh w2-sh">
                                <div className="v13-sh ps14-sh s13-sh c9-sh">
                                    <p className="p2-sh f2-sh">Retrouver vos amis.</p>
                                </div>
                                <div className="v14-sh ps15-sh s14-sh c10-sh">
                                    <p className="p3-sh f3-sh">Cliquez sur le bouton « S’abonner » pour voir les publications
                                        de vos proches.</p>
                                </div>
                                <Contacts contacts={this.props.contacts}/>
                            </div>
                            <div className="v23-sh ps23-sh s23-sh c17-sh">
                                <picture className="i6-sh">
                                        <img
                                            src={require("../images/contacts.png")}
                                            alt="" className="js4-sh i5-sh"/>
                                </picture>
                            </div>
                        </div>
                        <div className="v24-sh ps24-sh s24-sh c18-sh">
                            <p className="p5-sh f6-sh">Nous enregistrons vos contacts seulement pour vous aider à mieux
                                profiter de SmiJoy. <span className="f7-sh"><a>En savoir plus.</a></span></p>
                        </div>
                    </div>
                    <div className="v25-sh ps25-sh s25-sh c19-sh">
                        <p className="p6-sh f8-sh">Etape 2/3</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="c20">
        </div>
            </div>
        );
    }
}

export default ShowContacts;