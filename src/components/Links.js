// src/components/Links.js
import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.github} target="_blank">
        https://github.com/liza
      </a>
      <a href={props.linkedin} target="_blank">
        https://www.linkedin.com/in/liza/
      </a>
    </div>
  );
}

export default Links;
