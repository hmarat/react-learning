import React from "react"

const EditOption = props => (
    <form className="edit-option" onSubmit={props.editOptionSubmitHandler}>
        <input 
            className="edit-option-input" 
            defaultValue={props.optionText} 
            name="editingOptionText"
            onChange={props.onChange}
            autoFocus={true} 
            onBlur={props.onBlur}
        />
    </form>
)

export default EditOption