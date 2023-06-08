import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../Action/Categories";

export default function CategoriesAdd(props) {
  const [show, setShow] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState();
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Categories);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    props.categorymodal(false);
  };
  useEffect(() => {
    handleShow();
  }, []);

  // console.log("newCategoryName: ", newCategoryName);
  const submit = (dets) => {
    dets.preventDefault();

    dispatch(addCategories(newCategoryName));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={"submit"}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewCategoryName(e.target.value);
                }}
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
                Response.isLoading == false && handleClose();
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
