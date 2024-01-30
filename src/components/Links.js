// src/components/Links.js
import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} target="_blank">
        GitHub
      </a>
      <a href={props.linkedin} target="_blank">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;
