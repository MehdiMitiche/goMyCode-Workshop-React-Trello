import React from "react";
const TAGS = {
  work: "#ff675f",
  study: "#63ffbb",
  hobby: "#833ad9",
};

const CardItem = (props) => {
  return (
    <div className="card-container">
      <div
        className="card-tag"
        style={{ backgroundColor: TAGS[props.tag] }}
      ></div>
      <div className="card-title">{props.title}</div>
      <hr></hr>
      <div className="card-description">{props.description}</div>
      <div className="card-footer">
        <div className="card-ddl">{props.ddl}</div>
        <div className="card-actions">
          {props.section === "To Do" ? null : (
            <div
              className="action"
              onClick={() => {
                props.toPreviousStep(props.id);
              }}
            >
              Presvious
            </div>
          )}
          {props.section === "Completed" ? null : (
            <div
              className="action"
              onClick={() => {
                props.toNextStep(props.id);
              }}
            >
              Next
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
