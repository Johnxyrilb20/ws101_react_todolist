import React from "react"
import './Ifconditions.css';

function MissedGoal() {
    return <h3 id="ifcondition">YOU MISSED!</h3>
}

function MadeGoal() {
    return <h3>Goal!!!!</h3>
}

function Goal(props) {
    const isGoal = props.isGoal;

    //if (isGoal) {
    //    return <MadeGoal />;
    //}
    //return <MissedGoal />
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    )
}

export default Goal;