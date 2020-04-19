import React from "react";
import Menu from "./Menu/Menu";
import Gags from  "./Gags/Gags";
import PostForm from "./Post/Post";
import News from "./News/News";
import Ads from "./Ads/Ads";
import "./Main.css";

class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Menu/>
                <div className="ps56 v55 s55">
                    <div className="v56 ps57 s56 c51">
                        <div className="v57 ps58 s57 c52">
                        </div>
                            <div className="v58 ps59 s58 c53">
                                <Gags/>
                                <Ads/>
                        </div>
                    </div>
                </div>
                <div className="ps86 v85 s85">
                    <PostForm/>
                    <News/>
                </div>
            </div>
        );
    }
}

export default Main;