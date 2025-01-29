const Project = ({ image, title, description, technologies, liveLink, frontendRepo, backendRepo }) => (
  <div className="bg-white shadow rounded-lg p-4">
  <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
  <h3 className="text-xl font-bold mt-4">{title}</h3>
  <p className="mt-2">{description}</p>
  <div className="mt-2 flex flex-wrap gap-2">
    {technologies.map((tech, index) => (
      <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">{tech}</span>
    ))}
  </div>
  <div className="mt-4">
    {liveLink && (
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Live Demo</a>
    )}
    {frontendRepo ? (
      <a href={frontendRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Frontend Code</a>
    ) : null}
    {backendRepo ? (
      <a href={backendRepo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Backend Code</a>
    ) : null}
  </div>
</div>
);

export default Project;