// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

import facebook from "../../assets/images/icons/facebook.svg";
import github from "../../assets/images/icons/github.svg";
import instagram from "../../assets/images/icons/instagram.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import gmail from "../../assets/images/icons/gmail.svg";

function Contact() {
  // Use an object to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Use a single handler for all input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  // Use async/await syntax for the submit handler
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, message } = formData;
      const data = {
        Name: name,
        Email: email,
        Message: message
      }


      const endpoint = "/server/api/contact";
      const response = await axios.post(endpoint, (data), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

      

      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (err) {
      console.error("An error occurred:", err);
    }
  };

  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row justify-between gap-16 md:mx-14 mx-5 my-12"
      >
        <div className="flex flex-col gap-5 ">
          <h3 className="text-2xl">Get in touch</h3>
          <a href="mailto:ankijit123@gmail.com" className="flex">
            <img src={gmail} alt="" className="socialicons" />
            <span className="ml-4">ankijit123@gmail.com</span>
          </a>
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100091178284158"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" className="socialicons" />
            </a>
            <a
              href="https://github.com/Ankijit2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="socialicons" />
            </a>
            <a
              href="https://www.instagram.com/a.r_design.s/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" className="socialicons" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankijit-roy-642409263"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className="socialicons" />
            </a>
          </div>
        </div>
        <div className=" basis-7/12 contform">
          <form
            action="/contactme"
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
          >
            <h3 className="text-2xl">For clients</h3>
            {/* Use the name attribute to identify each input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleInput}
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Requirements"
              required
              value={formData.message}
              onChange={handleInput}
            ></textarea>
            <button className="buttons">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
