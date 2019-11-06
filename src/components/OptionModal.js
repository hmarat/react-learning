import React from "react"
import Modal from "react-modal"

const OptinModal = (props) => (
    <Modal
        className="modal"
        isOpen={!!props.selectedOption}
        onRequestClose={props.actionCloseHandler}
        contentLabel="example modal"
        appElement={document.getElementById("app")}
        closeTimeoutMS={200}
    >
        <h3 className="modal__title">Selected optins</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.actionCloseHandler}>Close</button>
    </Modal>
)

export default OptinModal;