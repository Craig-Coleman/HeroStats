import React from "react";

function Item({ item, deleteItem }) {

    const { id, name, stat, weight } = item;

    return (
        <div className="item" >
            <h3>--- Name: {name}</h3>
            <h3>|    {stat}</h3>
            <h3> |    Weight: {weight}</h3>
            <button 
                className="deletebutton" 
                onClick={() => deleteItem(id)}    
            >Delete Item</button>
        </div>
    );
};

export default Item;