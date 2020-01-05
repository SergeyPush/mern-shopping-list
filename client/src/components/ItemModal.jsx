import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { Modal, Button, Form } from "react-bootstrap";

const ItemModal = ({ display, handleClose, addItem }) => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    if (display) inputRef.current.focus();
  }, [display]);

  const handleSave = () => {
    addItem({ name });
    handleClose();
    setName("");
  };
  return (
    <div>
      <Modal show={display} onHide={handleClose}>
        <Form onSubmit={handleSave}>
          <Modal.Header closeButton>
            <Modal.Title>Add to shopping list</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              ref={inputRef}
              type="text"
              placeholder="Enter item name"
              value={name}
              onChange={evt => setName(evt.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default connect(null, { addItem })(ItemModal);
