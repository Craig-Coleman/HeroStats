import React, {useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharSheet from "./CharSheet";
import Info from "./Info";
import Inventory from "./Inventory";
import Pic from "./Pic";

function App() {

    const [charInfo, setCharInfo] = useState([]);
    const [gear, setGear] = useState([]);

    useEffect(() => {
        fetch("https://demo-json.onrender.com/charinfo")
            .then(res => res.json())
            .then(data => setCharInfo(data[0]))
        fetch("https://demo-json.onrender.com/gear")
            .then(res => res.json())
            .then(data => setGear(data))
    }, []);

    function addItem(newItem) {
        fetch("https://demo-json.onrender.com/gear", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItem),
        })
            .then(res => res.json())
            .then(item => setGear([...gear, item]));
    };

    function deleteItem(id) {
        console.log(id)
        fetch(`https://demo-json.onrender.com/gear/${id}`, {
            method: "DELETE"
        })
        .then(setGear(gear.filter((item) =>item.id !== id)));
    };

    return (
        <div className="page" >
            <Header />
            <Switch>
                <Route path="/" exact >
                    <h3 id="welcometitle" >Welcome Adventurer!  Your Journey Awaits!</h3>
                    <Pic />
                </Route>
                <Route path="/charsheet" >
                    <CharSheet charInfo={charInfo} />
                </Route>
                <Route path="/info" >
                    <Info charInfo={charInfo} />
                </Route>
                <Route path="/inventory" >
                    <Inventory gear={gear} addItem={addItem} deleteItem={deleteItem} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;