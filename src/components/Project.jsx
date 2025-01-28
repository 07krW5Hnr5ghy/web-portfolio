const Project = ({ title, description, link }) => (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a href={link} className="text-blue-600 hover:underline mt-4 inline-block">View Details</a>
    </div>
);

export default Project;