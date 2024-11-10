import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Projects from '../../components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Projects/>
      <div id="contact">
        <Contact/>
      </div>
      
    </>
  );
}
