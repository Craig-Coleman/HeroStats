import React, { useState } from "react";

function Backstory() {

    const [backstory, setBackstory] = useState("Minsc is a fierce ranger who combats evil along side his trusty miniature giant space-hamster, Boo");

    function updateBackstory(newBackstory) {
        setBackstory(newBackstory);
    };

    return (
        <div>
            <h2 id="backstory-title">Backstory</h2>
            <textarea
                id="backstory" 
                type="field"
                value={backstory}
                onChange={(event) => updateBackstory(event.target.value)}
                ></textarea>
        </div>
    );
};

export default Backstory;