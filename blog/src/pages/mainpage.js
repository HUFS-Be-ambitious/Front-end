import React from 'react';
import Navigation from "../components/navigation";
import Items from '../components/items';
import Ad from "../components/advertisement";
import Pointlist from "../components/pointlist";
import Mainitem from "../components/mainitem";
import Maindelivery from "../components/maindelivery";
import Maindueitem from "../components/maindueitem";
import Mainduedelivery from "../components/mainduedelivery";
function mainpage(){
    return(
        <div>
            <Navigation></Navigation>
            <Ad/>
            <Pointlist/>
            <Mainitem/>
            <Maindelivery/>
            <Maindueitem/>
            <Mainduedelivery/>
            
        </div>
    )
}
export default mainpage;