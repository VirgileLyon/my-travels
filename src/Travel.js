import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.photo} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.distance}</cite>
      <blockquote>{props.country}</blockquote>
    </figcaption>
  </figure>
);

export default Travel;