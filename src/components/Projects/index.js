import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";

function ProjectCards(props) {
    return (
        <div><div class="card">
            <div class="card-header">
                <p class="title has-text-primary has-text-left">
                    <span>{props.name}</span>
          </p>
        </div>
        <div class="card-content">
          <figure class="image">
            <img src={props.image} alt={props.name}></img>
          </figure>
        </div>
        <footer class="card-footer">
          <a href={props.deploy} class="card-footer-item"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/>Deploy</a>
          <a href={props.github} class="card-footer-item"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/>Source Code</a>
        </footer>
      </div>
      <br></br>
      <br></br>
      <br></br>
      </div>
    );
}
  
  export default ProjectCards;