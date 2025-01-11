import React, { useState } from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(children.props.children);

  return (
    <li className="todoItem">
      {isEditing ? (
        <div className="editContainer">
          <input
            className="editInput"
            type="text"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
          <button
            className="saveButton"
            onClick={() => {
              handleEditTodo(index, editValue);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
          className="cancelButton"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {children}
          <div className="actionsContainer">
            <button className="editButton" onClick={() => setIsEditing(true)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                handleDeleteTodo(index);
              }}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}
