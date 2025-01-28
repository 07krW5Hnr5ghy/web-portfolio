const Skill = ({ icon, skill }) => (
    <div className="text-center flex flex-col">
      <div className="text-4xl mx-auto">{icon}</div>
      <p className="mt-2">{skill}</p>
    </div>
);

export default Skill;