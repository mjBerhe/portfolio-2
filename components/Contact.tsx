import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import emailjs from "emailjs-com";

const Contact = () => {
  const contactRef = useRef(null);
  const [contactInfoRef, contactInfoInView, contactInfoEntry] = useInView({
    threshold: 0,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formType = e.currentTarget.name;
    const formValue = e.currentTarget.value;
    setForm((prev) => ({
      ...prev,
      [formType]: formValue,
    }));
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    console.log(form);

    // const result = await emailjs.sendForm(
    //   "service_3cdiee4",
    //   "template_57c2yfl",
    //   e.target,
    //   "user_HeqlqbuQa4Ip0GvzY2pRO"
    // );
    // console.log(result);
  };

  return (
    <div ref={contactRef} className="flex min-h-screen">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-4xl font-bold text-left mt-4">CONTACT ME</h1>
        </div>

        <div
          className="flex flex-col max-w-5xl mx-auto w-full"
          ref={contactInfoRef}
        >
          <div
            className={`flex flex-col relative mt-8 p-8 ${
              !contactInfoInView && "hidden"
            }`}
          >
            <div className="border-tl-right"></div>
            <div className="border-tl-down"></div>
            <div className="border-br-up"></div>
            <div className="border-br-left"></div>
            <form
              onSubmit={sendEmail}
              autoComplete="off"
              className="grid grid-rows-5 grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleFormChange}
                className="form-input col-span-1"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleFormChange}
                className="form-input col-span-1"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleFormChange}
                className="form-input col-span-2"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleFormChange}
                className="form-textarea col-span-2 row-span-3 self-start"
              />
              <button type="submit" className="col-span-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
