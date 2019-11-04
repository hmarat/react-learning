import React from "react"
import Modal from "react-modal"

const OptinModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.actionCloseHandler}
        contentLabel="example modal"
        appElement={document.getElementById("app")}
    >
        <h3>Selected optins</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.actionCloseHandler}>Close</button>
    </Modal>
)

export default OptinModal;