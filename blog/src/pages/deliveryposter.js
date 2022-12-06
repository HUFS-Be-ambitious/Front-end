import React from 'react';
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import Deliverydetail from "../components/deliverydetail";
function deliveryposter(){
    return(
        <div> 
            <Navigation></Navigation>
            <Deliverydetail></Deliverydetail>
        </div>
    )
}
export default deliveryposter;