import React from "react";
import './body.css'
import './body.scss';
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Activity Section/Activity'

const Body=()=>{
    return(
        <div className="mainContent">
            <Top />

            <div className="bottom flex">
                <Listing />
                <Activity />
            </div>

        </div>
    )
}
export default Body