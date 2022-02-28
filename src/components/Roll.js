import React, { useState } from "react"

function Roll() {

    const [currentRoll, setCurrentRoll] = useState("N/A")

    function rollDice(event) {
        const die = event.target.innerHTML
        const rollFunctions = {
            d4: function() { setCurrentRoll(Math.floor(Math.random() * 4) + 1) },
            d6: function() { setCurrentRoll(Math.floor(Math.random() * 6) + 1) },
            d8: function() { setCurrentRoll(Math.floor(Math.random() * 8) + 1) },
            d10: function() { setCurrentRoll(Math.floor(Math.random() * 10) + 1) },
            d12: function() { setCurrentRoll(Math.floor(Math.random() * 12) + 1) },
            d20: function() { setCurrentRoll(Math.floor(Math.random() * 20) + 1) },
        }
        rollFunctions[die]()
    }
    return (
        <div id="roll">
            <h2>Roll</h2>
            <button onClick={(event) => rollDice(event)}>d4</button>
            <button onClick={(event) => rollDice(event)}>d6</button>
            <button onClick={(event) => rollDice(event)}>d8</button>
            <button onClick={(event) => rollDice(event)}>d10</button>
            <button onClick={(event) => rollDice(event)}>d12</button>
            <button onClick={(event) => rollDice(event)}>d20</button>
            <div>
                <h3>Current Roll</h3>
                <h1 id="current-roll">{currentRoll}</h1>
            </div>
        </div>
    );
};

export default Roll;