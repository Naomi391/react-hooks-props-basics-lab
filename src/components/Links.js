// src/components/Links.js
import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}

export default Links;
