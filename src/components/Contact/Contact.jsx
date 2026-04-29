import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eyelrco",  // Replace with your EmailJS Service ID
        "template_d9giith",  // Replace with your EmailJS Template ID
        form.current,
        "Xf8aSKaRglyLe9hs5"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" data-reveal className="py-20">
      <div className="page-container flex justify-center">
        <div className="mt-8 w-full max-w-md">
          <h3 className="text-2xl font-semibold text-[var(--text)] text-center">Contact</h3>
          <p className="mt-2 text-[var(--muted)] text-center">
            Interested in working together? Send a concise message and I’ll respond shortly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-3">
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="A short message (what you’re looking for)"
              rows="4"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] text-white px-4 py-2 text-sm font-medium hover:opacity-95"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
