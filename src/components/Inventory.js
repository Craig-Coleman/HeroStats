import React, {useState} from "react";
import Item from "./Item";

function Inventory({ gear, addItem, deleteItem }) {

    const [name, setName] = useState("");
    const [stat, setStat] = useState("");
    const [weight, setWeight] = useState("");

    function updateName(newName) {
        setName(newName);
    };

    function updateStat(newStat) {
        setStat(newStat);
    };

    function updateWeight(newWeight) {
        setWeight(newWeight);
    };

    const formData = {
        name,
        stat,
        weight
    };

    function handleAddItem(event) {
        event.preventDefault();
        addItem(formData);
    };

    const gearList = gear.map((item) => {
        return (
            <Item key={item.name} item={item} deleteItem={deleteItem} />
        );
    });

    return (
        <div className="page" >
            <h1 id="invtitle">Inventory</h1>
            <h3 id="formtitle" >Add Item</h3>
            <form id="form" onSubmit={(event) => handleAddItem(event)} >
                <input 
                    type="text" 
                    placeholder="Item Name"
                    onChange={(event) => updateName(event.target.value)}
                    value={name}
                ></input>
                <input 
                    type="text" 
                    placeholder="Damage or Armor Class"
                    onChange={(event) => updateStat(event.target.value)}
                    value={stat}
                ></input>
                <input 
                    type="text" 
                    placeholder ="Item Weight" 
                    onChange={(event) => updateWeight(event.target.value)}
                    value={weight}
                ></input>
                <input type="submit" ></input>
            </form>
            {gearList}
        </div>
    );
};

export default Inventory;