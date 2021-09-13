import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("please enter a valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section class="section" id="contact">
      <div class="container ">
        <div class="section-heading">
        <br></br>
        
          <h3 class="title is-2">Contact</h3>
          <h4 class="subtitle is-5">Get in touch</h4>
        </div>
        <hr></hr>
        <br></br>

        <div class="columns ">
          <div class="column is-6 is-offset-3">
            <div class="box has-background-link">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Text input"
                    name="name"
                    defaultValue={name}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email input"
                    
                    name="email"
                    defaultValue={email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea
                    class="textarea"
                    placeholder="Textarea"
                    name="message"
                    defaultValue={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}

              <div class="field is-grouped has-text-centered ">
                <div class="control">
                  <button
                    class="button is-success is-large"
                    onSubmit={handleSubmit}
                  >
                    <span>
                    <img src="https://img.icons8.com/material-outlined/24/000000/mail.png" alt="mail"/> Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
