"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "aa611cd0-5c53-43d5-9ddc-15fb57a15776");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "alert-button",
        },
        footer: '<a href="/" style="color: #3085d6;">Go to Home</a>',
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <section className="flex  justify-center items-center bg-gray-400 rounded-md">
      <form
        className="w-[900px] bg-gray-200 border rounded-md px-6 pt-6 pb-7 text-gray-800 m-6"
        onSubmit={onSubmit}
      >
        <h2 className="text-center text-2xl font-semibold">Contact Form</h2>
        <div className="mt-5 ">
          <label>Full Name</label>
          <input
            type="text"
            className="fields"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <label>Email adress</label>
          <input
            type="email"
            className="fields"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-5">
          <label>Your Message</label>
          <textarea
            name="message"
            className="fields2"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-14 bg-gray-700 border-none rounded-md cursor-pointer text-base text-white font-medium mt-6"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
