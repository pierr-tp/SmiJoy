import React from "react";
import "../Main.css";

class PostForm extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="v86 ps87 s86 c80">
                <div className="v87 ps88 s87 c81">
                    <div className="v88 ps89 s88 c82">
                        <div className="v89 ps90 s89 c83">
                            <picture className="i50">
                                <img src={require("../Images/79369497_604676463620308_7656146566557728768_n.jpg")} alt=""
                                     className="js15 i49"/>
                            </picture>
                        </div>
                        <div className="v90 ps91 s90 c84">
                            <textarea placeholder="Ecrivez quelque chose !" name="texte" className="input4"></textarea>
                        </div>
                    </div>
                    <div className="v91 ps92 s91 c85">
                        <div className="v92 ps93 s92 c86">
                            <a href="#" className="a4">
                                <picture className="i52">
                                    <img src={require("../Images/image.png")} alt="" className="js16 i51"/></picture>
                            </a>
                        </div>
                        <div className="v93 ps94 s93 c87">
                            <a href="#" className="a5">
                                <picture className="i54"><img src={require("../Images/smile.png")} alt="" className="js17 i53"/>
                                </picture>
                            </a>
                        </div>
                        <div className="v94 ps95 s94 c88">
                            <picture className="i56">
                                <img src={require("../Images/more.png")} alt="" className="js18 i55"/>
                            </picture>
                        </div>
                        <form method="POST" action="" className="v95 ps96 s95">
                            <div className="v96 ps97 s96 c89">
                                <input type="submit" value="Publier" name="button" className="js19 s97 submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostForm;