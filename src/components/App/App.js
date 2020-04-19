import React from "react";
import * as firebase from "firebase";
import Main from "../Main/Main";
import GetContacts from "../Register/GetContacts/GetContacts";

//Configuration de firebase
const firebaseConfig = {
  apiKey: "AIzaSyDzYTP1BH3PTEvbGRTOVPaZa5LICrMzGek",
  authDomain: "smijoydb.firebaseapp.com",
  databaseURL: "https://smijoydb.firebaseio.com",
  projectId: "smijoydb",
  storageBucket: "smijoydb.appspot.com",
  messagingSenderId: "50966438637",
  appId: "1:50966438637:web:119f344289743df1ada2e4",
  measurementId: "G-Z7V0N796JJ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isConnected: false
    }
  }

componentWillMount() {
  //Vérifie si l'utilisateur est connecté
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      this.setState({
        isConnected: true
      });
      console.log("Vous êtes connecté :)");
    }else{
      this.setState({
        isConnected: false
      });
      console.log("Vous n'êtes pas connecté ;) ");
    }
  });
}

render(){
    if(this.state.isConnected === true){
      return <Main/>
    } else if(this.state.isConnected === false){
      return <GetContacts/>
    }
}
}

export default App;
