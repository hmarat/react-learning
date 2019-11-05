import React from "react"

const Action = props => (
    <div>
        <button
            className="big-button"
            onClick={props.pickActionHandler}
            disabled={!props.hasOptions}
        >
            What should I do?
            </button>
    </div>
)


export default Action