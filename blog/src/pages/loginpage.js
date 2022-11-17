import React from 'react';
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import './style.css';
function loginpage(){
    return(
        <div>
            <Navigation>
            </Navigation>
            <div>로그인</div>
            <div className="테두리">
            <div className="loginform">
                <div className="logininput">
                    <div><input className="idinput"></input></div>
                    <div><input className="passwardinput"></input></div>
                </div>
                <button className="loginbutton">로그인</button>
            </div>
            </div>
        </div>
    )
}
export default loginpage;