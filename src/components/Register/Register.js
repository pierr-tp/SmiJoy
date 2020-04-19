import React from "react";
import LoginForm from "../Login/Login";
import * as firebase from "firebase";
import * as md5 from "js-md5";
import "./Register.css";

class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            txtPseudo: '',
            txtEmail: '',
            txtPassword: '',
            errorTxt: '',
            clickToLogin: false,
            loading: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToLogin = this.handleToLogin.bind(this);
    }

    handleSubmit() {

        //Gestion des erreurs (champs vides)
        if(this.state.txtPseudo === ''){
            this.setState({
                errorTxt: "Veuillez choisir un pseudo."
            });
        } else if(this.state.txtEmail === ''){
            this.setState({
                errorTxt: "Quel est votre adresse email ?"
            });
        } else if(this.state.txtPassword === '') {
            this.setState({
                errorTxt: "Veuillez choisir un mot de passe."
            });
        } else {
            const auth = firebase.auth();
            const db = firebase.firestore();
            const email = this.state.txtEmail;
            const pass = this.state.txtPassword;

            //Ajout de l'utilisateur au système d'authentification
            auth.createUserWithEmailAndPassword(email, pass).catch(error => {

                //Gestion des erreurs (avec Firebase)
                let errorCode = error.code;
                if (errorCode === 'auth/weak-password') {
                    this.setState({
                        errorTxt: "Le mot de passe est trop faible."
                    });
                } else if (errorCode === 'auth/invalid-email') {
                    this.setState({
                        errorTxt: "Votre adresse email est incorrecte."
                    });
                } else if (errorCode === 'auth/email-already-in-use') {
                    this.setState({
                        errorTxt: "Cette adresse email est déjà utilisée."
                    });
                }
                console.log(error);
                });

            //Ajout de l'utilisateur à la base de donnée
            auth.onAuthStateChanged(firebaseUser => {
                if(firebaseUser){
                    let user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: this.state.txtPseudo,
                    }).then(function() {
                        console.log(user.uid);
                        db.collection("utilisateurs").doc(user.uid).set({
                            pseudo: user.displayName,
                            email: email,
                            password: md5(pass)
                        })
                            .then(function(docRef) {
                                console.log("Document written !");
                            })
                            .catch(function(error) {
                                console.error("Error adding document: ", error);
                            });
                    }).catch(error => {
                        console.log(error);
                    });
                }
            });
        }

    }

    handleChange(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            errorTxt: '',
            [name]: value
        });
    }

    handleToLogin() {
        this.setState({
            clickToLogin: true
        });
    }

render() {
        if (this.state.clickToLogin === true) {
            return <LoginForm/>
        } else {
            return (
                <div className="RegisterForm">
                    <div className="ps-reg v-reg s-reg">
                        <div className="v2-reg ps2-reg s2-reg c-reg">
                            <div className="v3-reg ps3-reg s3-reg c2-reg">
                                <picture className="i2-reg">
                                    <img src={require('../images/Affiche-SmiJoy.png')} alt="" className="js-reg i-reg"/>
                                </picture>
                            </div>
                            <div className="v4-reg ps4-reg s4-reg c3-reg">
                                <p className="p-reg f-reg">Inscription</p>
                            </div>
                            <div className="v5-reg ps5-reg s5-reg w-reg">
                                <div className="v6-reg ps6-reg s6-reg c4-reg">
                                    <img src={require('../images/SmiJoy-logo.gif')} alt="" className="js2-reg i3-reg"/>
                                </div>
                                <div id="signUpForm" className="v7-reg ps7-reg s7-reg c5-reg">
                                    <div className="v8-reg ps8-reg s8-reg c6-reg">
                                        <input type="text" value={this.state.txtPseudo} onChange={this.handleChange} placeholder="Votre Pseudo" name="txtPseudo" id="pseudo"
                                               className="input-reg"/>
                                    </div>
                                    <div className="v9-reg ps9-reg s9-reg c7-reg">
                                        <input type="text" value={this.state.txtEmail} onChange={this.handleChange} placeholder="Votre Adresse Mail" name="txtEmail" id="email"
                                               className="input2-reg"/>
                                    </div>
                                    <div className="v10-reg ps10-reg s10-reg c8-reg">
                                        <input type="password" value={this.state.txtPassword} onChange={this.handleChange} placeholder="Votre Mot de Passe" name="txtPassword"
                                               id="password" className="input3-reg"/>
                                    </div>
                                    {
                                        this.state.errorTxt !== "" ?
                                        <Error errorTxt={this.state.errorTxt}/> : null
                                    }
                                    <div className="v11-reg ps11-reg s11-reg c9-reg">
                                        <p className="p2-reg f2-reg">
                                            En vous inscrivant, vous acceptez l’utilisation de cookies
                                            pour l’amélioration du site, ainsi que les Conditions générales et l’envois
                                            d’emails pour les notifications.
                                        </p>
                                    </div>
                                    <div className="v12-reg ps12-reg s12-reg c10-reg">
                                            <a onClick={this.handleSubmit} id="btnSignUp"
                                               className="f3-reg btn-reg v13-reg s13-reg">S'inscrire</a>
                                    </div>
                                    <div className="v14-reg ps13-reg s14-reg c11-reg">
                                        <p className="p3-reg f4-reg">ou</p>
                                    </div>
                                    <div className="v15-reg ps14-reg s15-reg c12-reg">
                                        <a onClick={this.handleToLogin} className="f5-reg btn2-reg v16-reg s16-reg">Se connecter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

class Error extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p className="error">{this.props.errorTxt}</p>
        );
    }
}

export default RegisterForm;