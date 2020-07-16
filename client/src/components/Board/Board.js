import React from "./node_modules/react"

function Board (props) {
    const drop = e => {
        e.preventDefault();
        //Transfer ID between this event and use it to get element by ID and append it to the board
        const card_id = e.dataTransfer.getData("card_id");

        const card = document.getElementById(card_id);
        card.style.display="block";

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Board