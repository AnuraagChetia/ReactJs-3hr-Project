import React from "react";
import ListItem from "./ListItem";
const List = (props) => {
  return (
    <div>
      <h1>Products</h1>
      <h2>Electronic Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "Electronic Item" && (
              <ListItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              ></ListItem>
            )
        )}
      </ul>
      <h2>Food Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "Food Items" && (
              <ListItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              ></ListItem>
            )
        )}
      </ul>
      <h2>SkinCare Items</h2>
      <ul>
        {props.products.map(
          (product) =>
            product.category === "SkinCare Items" && (
              <ListItem
                price={product.price}
                name={product.name}
                category={product.category}
                id={product.id}
                key={product.id}
                delete={props.onDelete}
              ></ListItem>
            )
        )}
      </ul>
    </div>
  );
};
export default List;
