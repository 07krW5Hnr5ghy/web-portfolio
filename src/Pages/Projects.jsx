import Project from "../components/Project";
import slides from "../slides";

const Projects = () => (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slides.map((slide,index)=> <Project
          key={index}
          image={slide.image}
          title={slide.title}
          technologies={slide.stack}
          description={slide.description_en}
          liveLink={slide.link}
          backendRepo={slide.backend}
          frontendRepo={slide.frontend}
          />)}
        </div>
      </div>
    </section>
);

export default Projects;