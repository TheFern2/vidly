import React from "react";

const Filtering = props => {
  const {
    items,
    onItemSelect,
    textProperty,
    valueProperty,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Filtering.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Filtering;
