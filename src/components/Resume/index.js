import React from "react";
import PDFfile from "../../assets/pdf/AGMT_Web_Development_Full_Stack_Resume.pdf";


function Resume() {

  return (
    <section class="section" id="resume">
      <div class="section-heading">
        <br></br>
        <h3 class="title is-2">Resume</h3>
        <h4 class="subtitle is-5">More about my past</h4>
        <hr></hr>

      </div>

      <br></br>

      <a href={PDFfile} class="button is-link is-medium">
        <span>Download</span>
      </a>
    </section>
  );
}

export default Resume;
