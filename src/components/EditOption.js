import React from "react"

const EditOption = props => (
    <form className="edit-option" onSubmit={props.editOptionSubmitHandler}>
        <input className="edit-option-input" defaultValue={props.optionText} name="editingOptionText" autoFocus={true} />
    </form>
)

export default EditOption