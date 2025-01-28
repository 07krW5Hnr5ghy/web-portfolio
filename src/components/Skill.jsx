const Skill = ({ icon, skill }) => (
    <div className="text-center">
      <span className="text-4xl">{icon}</span>
      <p className="mt-2">{skill}</p>
    </div>
);

export default Skill;