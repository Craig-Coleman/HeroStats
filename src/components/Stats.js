import React, { useState, useEffect } from "react";

function Stats() {

    const [strength, setStrength] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [constitution, setConstitution] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [charisma, setCharisma] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/stats")
            .then(res => res.json())
            .then(data => data)
            .then(data => setStats(data))
    }, []);

    function setStats(data) {
        setStrength(data[0].strength);
        setDexterity(data[0].dexterity);
        setConstitution(data[0].constitution);
        setWisdom(data[0].wisdom);
        setIntelligence(data[0].intelligence);
        setCharisma(data[0].charisma);
    };

    function addStat(event) {
        const stat = event.target.parentNode.parentNode.id
        const addFunctions = {
            strength: function() {setStrength(strength + 1)},
            dexterity: function() {setDexterity(dexterity + 1)},
            constitution: function() {setConstitution(constitution + 1)},
            wisdom: function() {setWisdom(wisdom + 1)},
            intelligence: function() {setIntelligence(intelligence + 1)},
            charisma: function() {setCharisma(charisma + 1)}
        }
        addFunctions[stat]();
    };

    function subtractStat(event) {
        const stat = event.target.parentNode.parentNode.id
        const subtractFunctions = {
            strength: function() {setStrength(strength - 1)},
            dexterity: function() {setDexterity(dexterity - 1)},
            constitution: function() {setConstitution(constitution - 1)},
            wisdom: function() {setWisdom(wisdom - 1)},
            intelligence: function() {setIntelligence(intelligence - 1)},
            charisma: function() {setCharisma(charisma - 1)}
        }
        subtractFunctions[stat]();
    };

    return (
        <div id="statblock" >

            <div id='strength'>
                <h2 className="statname" >STR</h2>
                <h2 className="statvalue" >{strength}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

            <div id="dexterity" >
                <h2 className="statname" >DEX</h2>
                <h2 className="statvalue" >{dexterity}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

            <div id="constitution" >
                <h2 className="statname" >CON</h2>
                <h2 className="statvalue" >{constitution}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

            <div id="wisdom" >
                <h2 className="statname" >WIS</h2>
                <h2 className="statvalue" >{wisdom}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

            <div id="intelligence" >
                <h2 className="statname" >INT</h2>
                <h2 className="statvalue" >{intelligence}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

            <div id="charisma" >
                <h2 className="statname" >CHA</h2>
                <h2 className="statvalue" >{charisma}</h2>
                <div className="buttons">
                    <button 
                        className="add"
                        onClick={(event) => addStat(event)} 
                    >+</button>
                    <button 
                        onClick={(event) => subtractStat(event)}
                    >-</button>
                </div>
            </div>

        </div>
    );
};

export default Stats;