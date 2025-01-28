import Project from "../components/Project";

const Projects = () => (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add more project cards as needed */}
          <Project
          title="Project Name" 
          description="Brief description of the project." 
          link="#" 
        />
        </div>
      </div>
    </section>
);

export default Projects;