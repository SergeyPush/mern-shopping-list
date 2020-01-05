import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button, Spinner } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { getAllItems, getLoading } from "../actions/itemsSelectors";
import ItemModal from "./ItemModal";

const ShoppingList = ({ items, deleteItem, getItems, loading }) => {
  const onDelete = id => {
    deleteItem(id);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div>
      <Button
        color="dark"
        className="mb-4 mr-3"
        onClick={() => {
          setShow(true);
        }}
      >
        Add item
      </Button>
      <Spinner animation={loading === true && "border"} variant="primary" />

      <ItemModal display={show} handleClose={() => setShow(prev => !prev)} />
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id: id, name }) => (
            <CSSTransition key={id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="mr-3"
                  variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    onDelete(id);
                  }}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
};

const mapStateToProps = state => ({
  items: getAllItems(state),
  loading: getLoading(state)
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
