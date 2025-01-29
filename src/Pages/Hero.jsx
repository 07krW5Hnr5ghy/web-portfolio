const Hero = () => (
    <section id="hero" className="bg-blue-600 text-white flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Hi, I'm Juan Pablo Romero Poveda</h2>
        <p className="mt-4 text-lg">Full Stack Developer</p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200">View Projects</a>
          <a href="#contact" className="bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600">Contact Me</a>
        </div>
      </div>
    </section>
);

export default Hero;