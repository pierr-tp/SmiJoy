import React from "react";
import * as firebase from "firebase";
import GoogleContacts from "react-google-contacts";
import ShowContacts from "../ShowContacts/ShowContacts";
import ResponseCallback from "../ShowContacts/ResponseCallback";
import "./GetContacts.css";

class GetContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            receiveContacts: false,
            contacts: []
        }
    }

    render() {

        if(this.state.receiveContacts === true){
            //On mets les contacts dans un tableau
            let contactsEmail = [];
            for(let i = 0; i < this.state.contacts.length; i++){
                contactsEmail.push(this.state.contacts[i].email);
            }
            //On vérifie ensuite pour chacun des contacts si ils appartiennent à la base de donnée
            let comContacts;
            let comContactsPseudo = [];
            contactsEmail.forEach(contact => {
                const db = firebase.firestore();
                db.collection("utilisateurs").where("email", "==", contact)
                    .get()
                    .then(querySnapshots => {
                        querySnapshots.forEach(doc => {
                            //On renvoie ensuite les pseudos des contacts correspondants
                            comContacts = doc.data();
                            comContactsPseudo.push(comContacts.pseudo);
                        });
                    });
            });
            return <ShowContacts contacts={comContactsPseudo}/>;
        }

        if (this.state.receiveContacts === false) {
            return (
                <div>
                    <div className="v-co ps-co s-co c-co">
                        <div className="ps2-co">
                        </div>
                        <div className="v2-co ps3-co s2-co c2-co">
                            <div className="ps4-co v3-co s3-co">
                                <div className="v4-co ps5-co s4-co c3-co">
                                    <a href="#" className="a-co"><img
                                        src={require("../images/smijoy-icone.gif")} alt=""
                                        className="js-co i-co"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps6-co v5-co s5-co">
                        <div className="v6-co ps7-co s6-co c4-co">
                            <div className="v7-co ps8-co s7-co w-co">
                                <div className="v8-co ps9-co s8-co c5-co">
                                    <div className="v9-co ps10-co s9-co c6-co">
                                        <p className="p-co f-co">Etape 2/3</p>
                                    </div>
                                    <div className="v10-co ps11-co s10-co c7-co">
                                        <p className="p2-co f2-co">Retrouver vos amis.</p>
                                    </div>
                                    <div className="v11-co ps12-co s11-co c8-co">
                                        <div className="v12-co ps13-co s12-co c9-co">
                                            <picture className="i3-co">
                                                <img
                                                    src={require("../images/gmail-logo.png")}
                                                    alt="" className="js2-co i2-co"/>
                                            </picture>
                                        </div>
                                        <div className="v13-co ps14-co s13-co c10-co">
                                            <p className="p3-co f3-co">Gmail</p>
                                        </div>
                                        <div  className="v14-co ps15-co s14-co c11-co">
                                            <GoogleContacts
                                                clientId="420137227829-qavmadfl68tn6o3qkt8aadug0nqot3b7.apps.googleusercontent.com"
                                                render={renderProps => (
                                                    <a onClick={renderProps.onClick}
                                                       className="f4-co btn-co v15-co s15-co">Accéder<p></p></a>
                                                )}
                                                buttonText="Import"
                                                onSuccess={response => {
                                                    this.setState({
                                                        receiveContacts: true,
                                                        contacts: response
                                                    });
                                                    /*return <HandleResponse contacts={this.props}/>;
                                                }*/}}
                                                onFailure={ResponseCallback}
                                            />
                                        </div>
                                    </div>
                                    <div className="v16-co ps16-co s16-co c12-co">
                                        <div className="v17-co ps17-co s17-co w2-co">
                                            <div className="v18-co ps18-co s18-co c13-co">
                                                <div className="v19-co ps19-co s19-co c14-co">
                                                    <picture className="i5-co">
                                                        <img
                                                            src={require("../images/yahoomail-logo.png")}
                                                            alt="" className="js3-co i4-co"/>
                                                    </picture>
                                                </div>
                                                <div className="v20-co ps20-co s20-co c15-co">
                                                    <p className="p4-co f5-co">YahooMail</p>
                                                </div>
                                                <div className="v21-co ps21-co s21-co c16-co">
                                                    <a className="f6-co btn2-co v22-co s22-co">Accéder<p></p></a>
                                                </div>
                                            </div>
                                            <div className="v23-co ps22-co s23-co c17-co"></div>
                                        </div>
                                    </div>
                                    <div className="v24-co ps23-co s24-co c18-co">
                                        <div className="v25-co ps24-co s25-co w3-co">
                                            <div className="v26-co ps25-co s26-co c19-co">
                                                <div className="v27-co ps26-co s27-co c20-co">
                                                    <picture className="i7-co">
                                                        <img
                                                            src={require("../images/outlook-logo.png")}
                                                            alt="" className="js4-co i6-co"/>
                                                    </picture>
                                                </div>
                                                <div className="v28-co ps27-co s28-co c21-co">
                                                    <p className="p5-co f7-co">Outlook</p>
                                                </div>
                                                <div className="v29-co ps28-co s29-co c22-co">
                                                    <a className="f8-co btn3-co v30-co s30-co">Accéder</a>
                                                </div>
                                            </div>
                                            <div className="v31-co ps29-co s31-co c23-co"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="v32-co ps30-co s32-co c24-co">
                                    <div className="v33-co ps31-co s33-co c25-co">
                                        <picture className="i9-co">
                                            <img
                                                src={require("../images/search.png")}
                                                alt="" className="js5-co i8-co"/>
                                        </picture>
                                    </div>
                                    <div className="v34-co ps32-co s34-co w4-co">
                                        <div className="v35-co ps33-co s35-co c26-co">
                                            <p className="p6-co f9-co">Nous pouvons effectuer une recherche sur
                                                votre
                                                messagerie afin
                                                d’accéder à vos contacts. Vous pourrez ainsi retrouver vos amis plus
                                                facilement sur
                                                SmiJoy.</p>
                                        </div>
                                        <div className="v36-co ps34-co s36-co c27-co"></div>
                                    </div>
                                    <div className="v37-co ps35-co s37-co c28-co">
                                        <picture className="i11-co">
                                            <img
                                                src={require("../images/contacts.png")}
                                                alt="" className="js6-co i10-co"/>
                                        </picture>
                                    </div>
                                </div>
                                <div className="v38-co ps36-co s38-co c29-co">
                                    <p className="p7-co f10-co">Nous enregistrons vos contacts seulement pour vous
                                        aider
                                        à mieux profiter
                                        de SmiJoy. <span className="f11-co"><a>En savoir plus.</a></span></p>
                                </div>
                                <div className="v39-co ps37-co s39-co c30-co">
                                    <p className="f12-co">Passer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c31-co">
                    </div>
                </div>
            );
        }
    }
}

export default GetContacts;