const Skills = () => (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <span className="text-4xl">💻</span>
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="text-center">
            <span className="text-4xl">⚛️</span>
            <p className="mt-2">React</p>
          </div>
          <div className="text-center">
            <span className="text-4xl">🎨</span>
            <p className="mt-2">CSS</p>
          </div>
          <div className="text-center">
            <span className="text-4xl">🌐</span>
            <p className="mt-2">HTML</p>
          </div>
        </div>
      </div>
    </section>
);

export default Skills;