import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {


  const [value, setValue] = useState('');
const addBrand = () => {
  createBrand({name: value}).then(data => setValue(''));
  onHide();
}


  return (
    <Modal size="lg" show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Height
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
          value={value}
          onChange = {e => setValue(e.target.value)}
          placeholder={"Enter new Height"} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" 
        onClick={addBrand}>
          Add new Height
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand