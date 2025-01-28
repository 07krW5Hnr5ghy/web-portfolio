const Contact = () => (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-md"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
);

export default Contact;