import React from "react";
import * as firebase from "firebase";
import RegisterForm from "../Register/Register";
import "./Login.css";

class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPassword: '',
            errorTxt: '',
            clickToRegister: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToRegister = this.handleToRegister.bind(this);
    }

    handleSubmit() {
        if(this.state.txtEmail === ''){
            this.setState({
                errorTxt: "Quel est votre adresse email ?"
            });
        } else if(this.state.txtPassword === '') {
            this.setState({
                errorTxt: "Quel est votre mot de passe ?"
            });
        } else {
            const auth = firebase.auth();
            const email = this.state.txtEmail;
            const pass = this.state.txtPassword;
            auth.signInWithEmailAndPassword(email, pass).catch(error => {
                let errorCode = error.code;
                if(errorCode === 'auth/invalid-email'){
                    this.setState({
                        errorTxt: "Votre adresse email est incorrecte."
                    });
                } else if (errorCode === 'auth/user-disabled'){
                    this.setState({
                        errorTxt: "Désolé, votre compte a été désactivé."
                    });
                } else if (errorCode === 'auth/user-not-found'){
                    this.setState({
                        errorTxt: "Ce compte est incorrect."
                    });
                } else if (errorCode === 'auth/wrong-password'){
                    this.setState({
                        errorTxt: "Votre mot de passe est incorrect."
                    });
                }
                console.log(error);
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

    handleToRegister(){
        this.setState({
            clickToRegister:true
        });
    }

    render() {
        if (this.state.clickToRegister === true) {
            return <RegisterForm/>
        } else {
            return (
                <div className="ps-log v-log s-log">
                    <div className="v2-log ps2-log s2-log c-log">
                        <div className="v3-log ps3-log s3-log w-log">
                            <div className="v4-log ps4-log s4-log v2-log">
                                <img src={require("../images/SmiJoy-logo.gif")} alt="" className="js-log i-log"/>
                            </div>
                            <div className="v5-log ps5-log s5-log c3-log">
                                <div className="v6-log ps6-log s6-log c4-log">
                                    <p className="p-log f-log">Connexion</p>
                                </div>
                                <div className="v7-log ps7-log s7-log c5-log">
                                    <input type="text" value={this.state.txtEmail} onChange={this.handleChange} placeholder="Votre Adresse Mail" name="txtEmail" id="email"
                                           className="input-log" required/>
                                </div>
                                <div className="v8-log ps8-log s8-log c6-log">
                                    <input type="password" value={this.state.txtPassword} onChange={this.handleChange} placeholder="Votre Mot de Passe" name="txtPassword" id="password"
                                           className="input2-log" required/>
                                </div>
                                {
                                    this.state.errorTxt !== "" ?
                                        <Error errorTxt={this.state.errorTxt}/> : null
                                }
                                <div className="v9-log ps9-log s9-log c7-log">
                                    <a onClick={this.handleSubmit} id="btnLogin" className="f2-log btn-log v10-log s10-log">Se
                                        connecter</a>
                                </div>
                                <div className="v11-log ps10-log s11-log c8-log">
                                    <p className="p2-log f3-log">ou</p>
                                </div>
                                <div className="v12-log ps11-log s12-log c9-log">
                                    <a onClick={this.handleToRegister}
                                       className="f4-log btn2-log v13-log s13-log">S’inscrire</a>
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

export default LoginForm;