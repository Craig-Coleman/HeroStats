import React, { useState, useEffect } from "react";

function Health() {

    const [currentHP, setCurrentHP] = useState("");
    const [maxHP, setMaxHP] = useState("");
    

    useEffect(() => {
        fetch("https://demo-json.onrender.com/health")
        .then(res => res.json())
        .then(healthData => setHealth(healthData[0]));
    }, []);

    function setHealth(healthData) {
        setCurrentHP(healthData.characterCurrent);
        setMaxHP(healthData.characterMax);
    }

    function addHealth() {
        fetch("https://demo-json.onrender.com/health/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                characterCurrent: currentHP + 1,
            })
        })
        .then( res => res.json())
        .then(setCurrentHP(currentHP + 1));
    }

    function subtractHealth() {
        fetch("https://demo-json.onrender.com/health/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                characterCurrent: currentHP - 1,
            })
        })
        .then( res => res.json())
        .then(setCurrentHP(currentHP - 1));
    };

    return (
        <div id="health">
            <h1>HP</h1>
            <h2 id="healthcount" >{currentHP} &frasl; {maxHP} </h2>
            <div className="buttons">
                <button 
                    className="add"
                    onClick={(addHealth)}
                >+</button>
                <button 
                    onClick={subtractHealth}
                    >-</button>
                </div>
        </div>
    );
};

export default Health;