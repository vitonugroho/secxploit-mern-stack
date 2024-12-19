import React, { useState } from "react";
import axios from "axios";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);  // New state for alert visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Menambahkan log untuk memeriksa apakah data dikirim
      console.log("Submitting form data:", formData);

      // Kirim data ke server Node.js
      axios
        .post("https://secxploit.xyz/send-email", formData)
        .then((response) => {
          console.log("Response from server:", response.data);
          setIsSubmitted(true);
          // Show the success alert for 3 seconds
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);  // Hide the alert after 3 seconds
          }, 3000);
        })
        .catch((error) => {
          console.error("There was an error sending the message!", error);
        });
    }
  };

  return (
    <div id="Contact" className="dark:bg-slate-950 bg-gradient-to-r from-slate-950 to-blue-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <SectionTitle title="Contact" />
      <div className="flex container mx-auto">
        <div className="container mx-auto flex flex-wrap gap-10 items-center justify-center pb-[10rem]">
          {/* Formulir Kontak */}
          <div className="w-full lg:w-3/4 xl:w-2/3 p-6 shadow-xl rounded-lg bg-gradient-to-r from-slate-900 to-blue-950 bg-opacity-60 dark:bg-slate-800 dark:bg-opacity-70 backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 text-white">
              Contact Us
            </h2>

            {/* Floating success alert (centered) */}
            {alertVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-green-500 text-white p-5 rounded shadow-lg text-center">
                  <p>Your message has been successfully sent!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-slate-700 dark:text-gray-200"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-slate-700 dark:text-gray-200"
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 dark:bg-slate-700 dark:text-gray-200"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-10 py-3 border-2 rounded border-tertiary text-tertiary hover:bg-tertiary hover:text-slate-950 hover:shadow-xl transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
