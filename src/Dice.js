import React from "react";
import "./Dice.css";

const Dice = ({id,selection,handleClick,num}) => {

    return(
        <div className={selection ? "dice selected" : "dice"} onClick={() => handleClick(id) }>
            <h3>{num}</h3>
        </div>
    );
}

export default Dice;