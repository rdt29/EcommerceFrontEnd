import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategories } from "../Action/Categories";

export default function CategoriesDelete(props) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const Response = useSelector((st) => st.Categories);

  const handleClose = () => {
    props.deleteConfirmation(false);
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    handleShow();
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-danger">Are you Sure Want To delete ! </h5>
          <h3 className="text-danger">
            {props.data.name} category
            {/* {props.data.id} */}
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id = "close" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteCategories(props.data.id));
              document.getElementById("close").click()
            }}
          >
            Confirm Delete &nbsp;
            {Response.isLoading && (
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
      </Modal>
    </>
  );
}
