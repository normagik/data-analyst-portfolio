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
    <div className="pt-10 pb-20 flex justify-center items-center">
      <p></p>
      {formSuccess ? (
        <div>{formSuccessMessage}</div>
      ) : (
        <form
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
          onSubmit={submitForm}
          className="w-full lg:w-3/5 lg:max-w-lg bg-white shadow-xl border border-solid border-gray-200 rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex flex-col py-5 px-2 ">
            <label className="font-Montserrat font-medium text-lg text-[#464DAF] pb-2 items-center">
              Name <span className="text-red-500 pl-1">*</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              value={formData.name}
              className="font-Raleway capitalize shadow appearance-none  border-[.5px] border-[#464DAF] rounded w-full px-2 py-2"
            />
          </div>

          <div className="flex flex-col py-3 px-2">
            <label className="font-Montserrat font-medium text-lg text-[#464DAF] pb-2">
              Email<span className="text-red-500 pl-1">*</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={handleInput}
              value={formData.email}
              className="font-Raleway shadow appearance-none border-[.5px] border-[#464DAF] rounded w-full px-2 py-2 "
            />
          </div>

          <div className="flex flex-col py-3 px-2">
            <label className="font-Montserrat font-medium text-lg text-[#464DAF] pb-2">
              Message <span className="text-red-500 pl-1">*</span>
            </label>
            <textarea
              name="message"
              onChange={handleInput}
              value={formData.message}
              className="font-Raleway capitalize shadow appearance-none border-[.5px] border-[#464DAF] rounded w-full px-2 py-2"
            ></textarea>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full font-Montserrat font-medium border-solid border-2 border-[#464DAF] hover:bg-white hover:text-black px-6 py-2  rounded-xl ml-2  cursor-pointer bg-[#464DAF] text-white"
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
export default ContactForm;
