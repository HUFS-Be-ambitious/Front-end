import React from 'react';
import Navigation from "../components/navigation";
import Items from '../components/items';
import Ad from "../components/advertisement";
function mainpage(){
    return(
        <div>
            <Navigation>
            </Navigation>
            <Items></Items>
            메인페이지
        </div>
    )
}
export default mainpage;