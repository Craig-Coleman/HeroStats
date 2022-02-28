import React, {useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharSheet from "./CharSheet";
import Info from "./Info";
import Inventory from "./Inventory";
import Pic from "./Pic";

function App() {

    const [charInfo, setCharInfo] = useState([])
    const [gear, setGear] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/charinfo")
            .then(res => res.json())
            .then(data => setCharInfo(data[0]))
        fetch("http://localhost:3000/gear")
            .then(res => res.json())
            .then(data => setGear(data))
    }, [])

    function updateInventory(newItem) {
        fetch("http://localhost:3000/gear", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(setGear([...gear, newItem]));
    };

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact >
                    <h3>Welcome Adventurer!  You're Journey Awaits!</h3>
                    <Pic />
                </Route>
                <Route path="/charsheet" >
                    <CharSheet charInfo={charInfo}/>
                </Route>
                <Route path="/info" >
                    <Info charInfo={charInfo} />
                </Route>
                <Route path="/inventory" >
                    <Inventory gear={gear} updateInventory={updateInventory}/>
                </Route>
            </Switch>
        </div>
    );
};

export default App;