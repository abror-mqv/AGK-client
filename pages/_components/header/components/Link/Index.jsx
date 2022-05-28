import React from "react";
import nasway from "./Link.module.scss"

function Link(props) {
  return (
      <a href={props.url} className={nasway.link}>
        {props.title}
      </a>
  );
}

export default Link;
