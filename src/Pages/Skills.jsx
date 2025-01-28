import Skill from "../components/Skill";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiExpress,SiRedux,SiPostgresql } from "react-icons/si";

const Skills = () => (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Skill icon={<FaJs/>} skill="JavaScript" />
          <Skill icon={<FaReact/>} skill="React" />
          <Skill icon={<FaCss3Alt/>} skill="CSS" />
          <Skill icon={<FaHtml5/>} skill="HTML" />
          <Skill icon={<FaNodeJs/>} skill="Node.js" />
          <Skill icon={<SiExpress/>} skill="Express.js" />
          <Skill icon={<SiRedux/>} skill="Redux" />
          <Skill icon={<SiPostgresql/>} skill="PostgreSQL" />
        </div>
      </div>
    </section>
);

export default Skills;