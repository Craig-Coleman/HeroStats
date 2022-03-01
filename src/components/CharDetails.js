import React from "react";

function CharDetails({ charInfo }) {

    const { characterName, 
            characterRace, 
            characterClass, 
            characterLevel } = charInfo

    return (
        <div className="details">
            <h2>Name: {characterName}</h2>
            <h2>Race: {characterRace}</h2>
            <h2>Class: {characterClass}</h2>
            <h2>Level: {characterLevel}</h2>
        </div>
    );
};

export default CharDetails;