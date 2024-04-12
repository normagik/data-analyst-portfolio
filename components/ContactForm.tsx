import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e: any) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <p></p>
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <form
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
          onSubmit={submitForm}
          className="w-full max-w-lg bg-white shadow-xl border border-solid border-gray-200 rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-col py-5">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
              className="shadow appearance-none border rounded w-3/4"
            />
          </div>

          <div className="flex flex-col py-5">
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={formData.email}
              className="shadow appearance-none border rounded w-3/4"
            />
          </div>

          <div className="flex flex-col py-5">
            <label>Message</label>
            <textarea
              name="message"
              onChange={handleInput}
              value={formData.message}
            ></textarea>
          </div>

          <button type="submit">Send message</button>
        </form>
      )}
    </div>
  );
}
export default ContactForm;
