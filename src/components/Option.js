import React from "react"
import EditOption from "./EditOption"

const Option = props => (
    <div className="option">
        {!props.isEditing
            ?
            <p className="option__text" onClick={() => props.editOptionHandler(props.optionText)}>{`${props.count}. ${props.optionText}`}</p>
            :
            <EditOption optionText={props.optionText} editOptionSubmitHandler={props.editOptionSubmitHandler} />
        }
        <button
            className="button button--link"
            onClick={() => props.removeOptionHandler(props.optionText)}
        >
            Remove
        </button>
        {props.editOptionError && <p className="add-option-error break">{props.editOptionError}</p>}
    </div>
)


export default Option