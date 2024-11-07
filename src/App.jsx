import Nav from "./components/Nav"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import ProjectsGrid from "./sections/ProjectsGrid"

const App = () => (
  <main>
    
    <section className="h-[100vh] bg-lime-200 overflow-hidden" id="home">
      <Nav />
      <Hero />
    </section>
    <section className="h-[100vh] bg-orange-200 overflow-hidden" id="about">
      <About />
    </section>
    <section className="bg-lime-200 hidden" id="projects">
      <Projects />
    </section>
    <section className="h-[100vh] bg-lime-200">
      <ProjectsGrid />
    </section>
  </main>
)

export default App