import Skill from "../components/Skill";

const Skills = () => (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Skill icon="💻" skill="JavaScript" />
          <Skill icon="⚛️" skill="React" />
          <Skill icon="🎨" skill="CSS" />
          <Skill icon="🌐" skill="HTML" />
        </div>
      </div>
    </section>
);

export default Skills;