import React from "react";
import CardItem from "./Card";

const Section = (props) => {
  return (
    <div className="section-container">
      <div className="section-header">{props.title}</div>
      {props.data.map((card) => {
        return (
          <CardItem
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            ddl={card.ddl}
            tag={card.tag}
            section={props.title}
            toPreviousStep={props.toPreviousStep}
            toNextStep={props.toNextStep}
          />
        );
      })}
    </div>
  );
};

export default Section;
