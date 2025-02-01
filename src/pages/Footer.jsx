import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://github.com/07krW5Hnr5ghy" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/juan-pablo-romero-poveda-477514253/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
          <FaLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
  