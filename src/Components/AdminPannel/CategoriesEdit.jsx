import { CCardImageOverlay } from "@coreui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap-button-loader";
import { Form, Modal, Spinner } from "react-bootstrap";
import { updateCategories } from "../Action/Categories";

export default function CategoriesEdit(props) {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [show, setShow] = useState(false);
  const Response = useSelector((state) => state.Categories);

  const handleClose = () => {
    setShow(false);
    props.fnc(false);
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleShow();
  }, []);

  const submit = (dets) => {
    dets.preventDefault();

    dispatch(updateCategories(Name, props.name.id));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={"submit"}>
          <Modal.Header closeButton>
            <Modal.Title>Categories Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Old Name</Form.Label>
              <Form.Control type="text" value={props.name.name} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Updated Name</Form.Label>
              <Form.Control
                type="text"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
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
              variant="warning"
              // type="submit"
            >
              Save Changes &nbsp;
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
            {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
