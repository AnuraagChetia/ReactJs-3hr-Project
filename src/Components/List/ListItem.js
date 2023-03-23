import React from "react";

const ListItem = (props) => {
  const deleteHandler = () => {
    props.delete(props.id);
  };
  return (
    <>
      <li id={props.id}>
        ${props.price}-{props.name}-{props.category}
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
      </li>
    </>
  );
};
export default ListItem;
