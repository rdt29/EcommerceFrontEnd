import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { supplierAdd } from "../Action/Supplier";
import { toast } from "react-toastify";

export default function AddSupplier(props) {
  const [show, setShow] = useState(false);
  const [newSupplierData, setNewSupplierData] = useState({
    id: "",
    name: "",
    inputemail: "",
  });
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Supplier);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    props.modal(false);
  };
  const handleChange = (e) => {
    console.log(newSupplierData, "dcf");
    // setNewSupplierData((prev) => {
    //   return {
    //     ...prev,
    //     [e.target.name]: e.target.value,
    //   };
    // });
    setNewSupplierData({ ...newSupplierData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    handleShow();
  }, []);

  const submit = (dets) => {
    dets.preventDefault();
    if ((newSupplierData.email = "" || newSupplierData.name == "")) {
      toast.error("Enter Details !");
    } else {
      console.log("newSupplierData: ", newSupplierData);
      dispatch(supplierAdd(newSupplierData));
      handleClose();
    }
  };
  return (
    <div>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={"submit"}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Supplier Name</Form.Label>
              <Form.Control name="name" type="text" onChange={handleChange} />
              <Form.Label>Supplier Email</Form.Label>
              <Form.Control
                name="inputemail"
                type="email"
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={(e) => {
                submit(e);
                // Response.isLoading == false && handleClose();
              }}
              variant="success"
            >
              Add &nbsp;
              {Response.isLoading == true && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
