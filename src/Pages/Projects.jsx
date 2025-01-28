const Projects = () => (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-4">
            <h3 className="text-xl font-bold">Project Name</h3>
            <p className="mt-2">Brief description of the project.</p>
            <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">View Details</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
);

export default Projects;