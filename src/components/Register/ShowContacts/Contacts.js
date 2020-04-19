import React from "react";
import "../ShowContacts/ShowContacts.css";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: []
        }
    }

    render() {
        setTimeout(() => {
            let reContact = this.props.contacts;
            let contacts = [];
            reContact.forEach(contact => {
                contacts.push(contact);
            });
            this.setState({
                contact: contacts
            });
        }, 500);

        return (
            <div>
                {this.state.contact.map(contact => (
                    <div className="v15-sh ps16-sh s15-sh c11-sh">
                        <div className="v16-sh ps17-sh s16-sh w3-sh">
                            <div className="v17-sh ps18-sh s17-sh c12-sh"></div>
                            <div className="v18-sh ps19-sh s18-sh c13-sh">
                                <div className="v19-sh ps20-sh s19-sh c14-sh">
                                    <img
                                        src={require("../images/smijoy-default_profile.gif")}
                                        alt="" className="js3-sh i4-sh"/>
                                </div>
                                <div className="v20-sh ps21-sh s20-sh c15-sh">
                                    <p className="p4-sh f4-sh">{contact}</p>
                                </div>
                                <div className="v21-sh ps22-sh s21-sh c16-sh">
                                    <a className="f5-sh btn-sh v22-sh s22-sh">S’abonner<p></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Contacts;