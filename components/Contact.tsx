import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import emailjs from "emailjs-com";

const profileLinks = [
  {
    name: "Resume",
    imgSrc: "/logos/Resume_W.png",
    href: "Resume 2021 v2.pdf",
  },
  {
    name: "Github",
    imgSrc: "/logos/Github_Logo_W.png",
    href: "https://github.com/mjBerhe",
  },
  {
    name: "Linkedin",
    imgSrc: "/logos/Linkedin_Logo_W.png",
    href: "https://www.linkedin.com/in/matthew-berhe-a632b017a/?originalSubdomain=ca",
  },
];

const Contact = () => {
  const contactRef = useRef(null);
  const [contactInfoRef, contactInfoInView, contactInfoEntry] = useInView({
    threshold: 0,
  });
  const [contactBeenShown, setContactBeenShown] = useState(false);

  useEffect(() => {
    if (contactInfoInView && !contactBeenShown) {
      setContactBeenShown(true);
    }
  }, [contactInfoInView]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [hasSubmit, setHasSubmit] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formType = e.currentTarget.name;
    const formValue = e.currentTarget.value;
    setForm((prev) => ({
      ...prev,
      [formType]: formValue,
    }));
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const messageValue = e.currentTarget.value;
    setForm((prev) => ({
      ...prev,
      message: messageValue,
    }));
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    console.log(form);

    const result = await emailjs.sendForm(
      "service_3cdiee4",
      "template_57c2yfl",
      e.target,
      "user_HeqlqbuQa4Ip0GvzY2pRO"
    );
    console.log(result);
    setHasSubmit(true);
  };

  return (
    <div ref={contactRef} className="flex min-h-screen">
      <div className="flex flex-col flex-1 space-y-6">
        <div className="self-start relative mt-24 mx-12">
          <div className="text-overline"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-left mt-4">
            CONTACT ME
          </h1>
        </div>

        <div
          className="flex flex-col flex-1 max-w-5xl mx-auto w-full px-4"
          ref={contactInfoRef}
        >
          <div
            className={`flex flex-col relative mt-8 p-8 ${
              !contactBeenShown && "hidden"
            }`}
          >
            <div className="border-tl-right"></div>
            <div className="border-tl-down"></div>
            <div className="border-br-up"></div>
            <div className="border-br-left"></div>
            <form
              onSubmit={sendEmail}
              autoComplete="off"
              className="grid grid-rows-5 grid-cols-2 gap-4 fade-in-delay"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleFormChange}
                className="form-input col-span-2 sm:col-span-1"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleFormChange}
                className="form-input col-span-2 sm:col-span-1"
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
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleMessageChange}
                className="form-textarea col-span-2 row-span-3 self-start"
              />
              <div className="mt-4 col-span-2 flex justify-center items-center">
                <button
                  type="submit"
                  disabled={hasSubmit}
                  className="button type1 w-1/2 sm:w-36"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 flex flex-col flex-1 items-center">
            {/* <h2 className="text-3xl">Send me a message, or check these out</h2> */}
            <div className="flex space-x-12 mt-6">
              {profileLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <img
                    src={link.imgSrc}
                    className="h-12 w-auto"
                    alt={`logo of ${link.name}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
