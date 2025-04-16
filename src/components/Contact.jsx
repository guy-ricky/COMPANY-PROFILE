import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_EMAIL_TOKEN);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div data-aos="fade-down"
      className=" text-center container mx-auto p-5 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          Get In Touch With Us.
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Reach out for personalized support from our experienced team.
        </p>
      </div>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-orange-600 text-white px-8 py-2 rounded cursor-pointer hover:scale-105 hover:font-bold duration-300">
          {result || "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
