import React from 'react';
import Me from "../../assets/images/new_PP2.jpg";

function About() {
    return (
      <section class="section" id="about">
        <div class="section-heading has-text-centered">
          <br></br>

          <h3 class="title is-2">About Me</h3>
          <h4 class="subtitle is-5">Jack of all trades, master of "some"</h4>

          <div class="subtitle is-6">
            <p>
              Never satisfied with being on the sidelines of technological
              advancement, I became a Full Stack Web Developer with a background
              in engineering, using my knowledge to build a more intuitive user
              experience on the web. I’ve recently earned a certificate in Full
              Stack Development from the University of Minnesota Coding
              Bootcamp, with newly developed skills in JavaScript, CSS, React.js
              and responsive web design. My friends, coworkers, and family
              members know me as an innovative problem solver, passionate about
              developing apps, with a current focus on mobile-first design and
              development. With each project, my aim is to best engage my
              audience for an impactful user experience. I applied aspects of UX
              and agile development in a recent project, working with a team of
              four to develop a single-page MERN app that helps everyone that
              joins the site to create any poll and track the top choices. I’m
              excited to leverage my skills as part of a fast-paced,
              quality-driven team to build better experiences on the web.
            </p>
            <br></br>
          </div>
        </div>

        <div class="columns has-same-height is-gapless">

          <div class="column">
            <div class="card">
              <div class="card-content">
                <h3 class="title is-2">Profile</h3>

                <div class="content">
                  <table class="table-profile">
                    <tr>
                      <th colspan="1"></th>
                      <th colspan="2"></th>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>9398654004</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>ari.martinez.tiru@gmail.com</td>
                    </tr>
                  </table>
                </div>
                <br></br>
                <div class="buttons has-addons is-centered">
                  <a href="https://github.com/arielo5" class="button is-link">
                    Github
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ariel-martinez-tiru/"
                    class="button is-link"
                  >
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/arielo5" class="button is-link">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by4">
                  <img src={Me} alt="Me"></img>
                </figure>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="card-content skills-content">
                <h3 class="title is-2">Skills</h3>
                <div class="content">
                  

                        <div class="columns has-same-height is-gapless">
                          <div class="column">
                            <div class="card">
                              <div class="card-content">
                                <li> <strong class="is-light is-5">Node.js</strong> </li>                                  
                                <li> <strong class="is-light is-5">Express.js</strong> </li>
                                <li> <strong class="is-light is-5">JavaScript</strong> </li>
                                <li> <strong class="is-light is-5">HTML5</strong> </li>
                                <li> <strong class="is-light is-5">CSS3</strong> </li>
                                <li> <strong class="is-light is-5">Bulma</strong> </li>
                                <li> <strong class="is-light is-5">Bootstrap</strong> </li>                                
                              </div> 
                            </div>
                          </div>
                          

                          <div class="column">
                            <div class="card">
                              <div class="card-content">
                                <li> <strong class="is-light is-5">jQuery</strong> </li>                                
                                <li> <strong class="is-light is-5">Git</strong> </li>
                                <li> <strong class="is-light is-5">MSSQL</strong> </li>
                                <li> <strong class="is-light is-5">Database</strong> </li>
                                <li> <strong class="is-light is-5">React</strong> </li>
                                <li> <strong class="is-light is-5">Mongoose</strong> </li>
                                <br></br>
                              </div>         
                            </div>                            
                          </div>                          
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;
