import React from "react";

const RandomButton = ({ onClick }) => (
    <div className="random-button">
        <button onClick={onClick}>Randomowy pokemon</button>
    </div>
);

export default RandomButton;