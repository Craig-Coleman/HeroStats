import React from "react";
import CharDetails from "./CharDetails";
import Backstory from "./Backstory";
import Pic from "./Pic";

function Info({ charInfo }) {
    return (
        <div className="page" >
            <Pic />
            <CharDetails charInfo={charInfo} />
            <Backstory />
        </div>
    );
};

export default Info;