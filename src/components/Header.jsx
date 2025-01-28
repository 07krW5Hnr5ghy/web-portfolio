const Header = () => (
    <header className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">YourName</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
);

export default Header;