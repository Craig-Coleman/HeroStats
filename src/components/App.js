import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import CharSheet from "./CharSheet";
import Info from "./Info";
import Inventory from "./Inventory";
import Pic from "./Pic";

function App() {

    const startGear = [
        {
            name: "Two-Handed Sword",
            stat: "Damage: 1d12 + 2",
            weight: "15 lbs."
        },
        {
            name: "Scale Mail",
            stat: "AC: 15",
            weight: "30 lbs."
        }
    ];

    const [gear, setGear] = useState(startGear)

    const charInfo = {
    characterName : "Minsc",
    characterRace: "Human",
    characterClass: "Ranger",
    characterLevel: 5,
    }

    function updateInventory(newItem) {
        setGear([...gear, newItem])
    }

    console.log(gear)

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