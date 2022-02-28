import React from "react";
import Pic from "./Pic";
import Stats from "./Stats";
import CharDetails from "./CharDetails";
import Health from "./Health";
import Roll from "./Roll";

function CharSheet({ charInfo }) {

    return (
        <div className="page" >
            <div>
            <Pic id="detaildiv" />
            <CharDetails charInfo={charInfo} />
            </div>
            <Stats />
            <div id="healthroll">
                <Health />
                <Roll />
            </div>
        </div>
        
    );
};

export default CharSheet;