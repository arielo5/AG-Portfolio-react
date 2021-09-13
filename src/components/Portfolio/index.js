import React from "react";
import ProjectCards from "../../components/Projects";
import projects from "../../projects.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Portfolio() {
  return (
    <section class="section" id="portfolio">
      <div class="container">
        <div class="section-heading">
        <br></br>
          <h3 class="title is-2">Portfolio</h3>
          <h4 class="subtitle is-5">My latest works</h4>
        </div>
        <hr></hr>
        <br></br>
      </div>

      <div class="columns is-centered">
        <div class="column is-6">
      <Wrapper id="card-data">
        {projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </Wrapper>
      </div>
      </div>
    </section>
  );
}

export default Portfolio;
