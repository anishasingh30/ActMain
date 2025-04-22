import React from "react";
import { useParams } from "react-router-dom";

function Goal() {
    const { id } = useParams();

    return (
        <div className="goal-page themed-text">
            <h1>Goal {id}</h1>
            <p>Details about SDG Goal {id} will go here.</p>
        </div>
    );
}

export default Goal;
