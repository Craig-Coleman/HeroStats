import React, { useState } from "react";

function Health() {

    const [currentHP, setCurrentHP] = useState(21);
    const [maxHP, setMaxHP] = useState(56);

    function addHealth() {
        setCurrentHP(currentHP + 1);
    }

    function subtractHealth() {
        setCurrentHP(currentHP - 1);
    }

    return (
        <div id="health">
            <h1>HP</h1>
            <h2 id="healthcount" >{currentHP} &frasl; {maxHP} </h2>
            <div className="buttons">
                <button 
                    className="add"
                    onClick={addHealth}
                >+</button>
                <button 
                    onClick={subtractHealth}
                    >-</button>
                </div>
        </div>
    );
};

export default Health;