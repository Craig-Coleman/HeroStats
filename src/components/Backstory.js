import React, { useState, useEffect } from "react";

function Backstory() {

    const [backstory, setBackstory] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/backstory")
        .then(res => res.json())
        .then(data => setBackstory(data[0].characterBackstory));
    }, []);

    function updateBackstory(newBackstory) {
        fetch("http://localhost:3000/backstory/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                characterBackstory: newBackstory,
            })
        })
        .then( res => res.json())
        .then(setBackstory(newBackstory));
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