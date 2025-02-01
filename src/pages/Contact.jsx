import {useState} from "react";
import emailjs from "emailjs-com";

const {VITE_EMAILJS_ID,VITE_TEMPLATE_ID,VITE_PUBLIC_KEY} = import.meta.env;

const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  });
  const [status,setStatus] = useState("");
  const [success,setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.send(
      VITE_EMAILJS_ID,
      VITE_TEMPLATE_ID,
      formData,
      VITE_PUBLIC_KEY
    ).then(
      (response) => {
        console.log("Email sent!",response);
        setStatus("Message sent succesfully");
        setSuccess(true);
      },
      (error) => {
        console.error("Error sending email:",error);
        setStatus("Failed to send message.");
        setSuccess(false);
      }
    );
    setFormData({ name: "", email: "", message: "" });
  }
  return(
    <section id="contact" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send Message
          </button>
          {status && success ? <p className="mt-4 text-center text-green-600">{status}</p> : <p className="mt-4 text-center text-red-600">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;