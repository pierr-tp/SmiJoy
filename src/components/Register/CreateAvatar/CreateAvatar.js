import React from "react";
import firebase from "firebase";
import "./CreateAvatar.css";
import * as md5 from "js-md5";

class CreateAvatar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        let uploader = document.getElementById("uploader");
        //Récupération du fichier
        let file = e.target.files[0];
        this.setState({
            avatarUrl: file
        });

        //Création d'une référence à Firebase Storage
        let storageRef = firebase.storage().ref("avatars/" + file.name);

        //Téléchargement du fichier
        let task = storageRef.put(file);

        //Mise à jour de la barre de progression
        task.on('state_changed',
                function progress(snapshot) {
                    let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },
                function error(err) {
                    console.log(err);
                },
                () => {
                    return firebase.storage().ref("avatars").child(file.name).getDownloadURL()
                        .then(url => {
                            this.setState({
                                avatarUrl:url
                            });
                        });
                }
            );
    }

    handleClick(){
        const db = firebase.firestore();
        const url = this.state.avatarUrl;
        console.log("hello");
            db.collection("utilisateurs").doc("rVCKDuAUYsRFH9lvOd6e0UvpZwH2").update({
                avatar: url
            })
                .then(function(docRef) {
                    console.log("Avatar added ! ;)");
                })
                .catch(function(error) {
                    console.error(":( Error adding document: ", error);
                });
    }

    render() {
        return(
            <div>
            <div className="v-az ps-az s-az c-az">
                <div className="ps2-az">
                </div>
                <div className="v2-az ps3-az s2-az c2-az">
                    <div className="ps4-az v3-az s3-az">
                        <div className="v4-az ps5-az s4-az c3-az">
                            <a className="a-az"><img
                                src={require("../images/smijoy-icone.gif")}
                                alt=""
                                className="js-az i-az"/></a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="ps6-az v5-az s5-az">
            <div className="v6-az ps7-az s6-az c4-az">
                <div className="v7-az ps8-az s7-az w-az">
                    <div className="v8-az ps9-az s8-az c5-az">
                        <div className="v9-az ps10-az s9-az c6-az">
                            <p className="p-az f-az">Etape 2/3</p>
                        </div>
                        <div className="v10-az ps11-az s10-az c7-az">
                            <p className="p2-az f2-az">Ajouter une photo de profil.</p>
                        </div>
                    </div>
                    <div className="v11-az ps12-az s11-az c8-az">
                        <div className="v12-az ps13-az s12-az c9-az">
                            <picture className="i3-az">
                                    <img
                                        src={require("../images/peinture.png")}
                                        alt="" className="js2-az i2-az"/>
                            </picture>
                        </div>
                        <div className="v13-az ps14-az s13-az w2-az">
                            <div className="v14-az ps15-az s14-az c10-az">
                                <p className="p3-az f3-az">Importer une photo de profil pour vous démarquer des autres.</p>
                                <p className="p4-az f4-az">Laissez libre cours à votre créativité !</p>
                            </div>
                            <div className="v15-az ps16-az s15-az c11-az">
                                <div className="v16-az ps17-az s16-az c12-az">
                                    {this.state.avatarUrl === null ?
                                    <img
                                        src={require("../images/smijoy-default_profile.gif")}
                                        alt="" className="js3-az i4-az"/> :
                                        <img src={this.state.avatarUrl}
                                             alt="Votre photo de profil" className="js3-az i4-az"/>
                                    }
                                </div>
                                <div className="v17-az ps18-az s17-az c13-az">
                                    <div className="wrapper-fi">
                                    <progress value="0" max="100" id="uploader" className="uploader">0%</progress>
                                    </div>
                                    <input type="file" className="fi" onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="v19-az ps19-az s19-az c14-az">
                            <picture className="i6-az">
                                    <img
                                        src={require("../images/crayons.png")}
                                        alt="" className="js4-az i5-az"/>
                            </picture>
                        </div>
                    </div>
                    <div className="v20-az ps20-az s20-az c15-az">
                        <div className="v21-az ps21-az s21-az c16-az">
                            <a className="f6-az btn2-az v22-az s22-az">Passer<p></p></a>
                        </div>
                        <div className="v23-az ps22-az s23-az c17-az">
                            <a className="f7-az btn3-az v24-az s24-az" onClick={this.handleClick}>Continuer<p></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="c18-az">
        </div>
            </div>
        );
    }
}

/*class ImportImage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="v16-fi ps17-fi s16-fi c11-fi">
                <div className="v17-fi ps18-fi s17-fi c12-fi">
                    <div className="v18-fi ps19-fi s18-fi c13-fi">
                        <img
                            src="images/smijoy-default_profile.gif?3a229b433c6d4d80450b72c665c3e3a45b0e98bf"
                            alt="" className="js3-fi i4-fi"/>
                    </div>
                    <div className="v19-fi ps20-fi s19-fi c14-fi">
                        <picture className="i6-fi">
                            <img
                                src="images/close-17.png?4311-086FC6C0-C3FF-4F82-A9DC-06454F655217-960-1-public.png-0-images-e2ca2f304244027b1fd3337c2e69aa7cd2325c23"
                                alt="" className="js4-fi i5-fi"/>
                        </picture>
                    </div>
                </div>
                <div className="v20-fi ps21-fi s20-fi c15-fi">
                    <div className="wrapper-fi">
                        <input type="file"/>
                    </div>
                </div>
                <div className="v21-fi ps22-fi s21-fi c16-fi">
                    <a className="f3-fi btn-fi v22-fi s22-fi">ok<p></p></a>
                </div>
            </div>
        );
    }

}*/

export default CreateAvatar;