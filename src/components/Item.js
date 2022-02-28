import React from "react"

function Item({item}) {

    const { name, stat, weight } = item;

    return (
        <div className="item" >
            <h3>--- Name: {name}</h3>
            <h3>|    {stat}</h3>
            <h3> |    Weight: {weight}</h3>
        </div>
    );
};

export default Item;