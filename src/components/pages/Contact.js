import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, or message

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid!");
      return;
    } else if (name === '') {
      setErrorMessage('Name is blank!')
      return;
    } else if (message === '') {
      setErrorMessage('Message is blank!')
      return;
    }

    // If successful, we want to clear out the input after registration.
    setName("");
    setMessage("");
    setEmail("");
    alert(`Thank you ${name}!`);
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form id="contact-form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button
          type="button"
          onClick={handleFormSubmit}
          onChange={handleInputChange}
        >
          Submit
        </button>
        {errorMessage && (
          <div>
            <h3>{errorMessage}</h3>
          </div>
        )}
      </form>
    </section>
  );
}
