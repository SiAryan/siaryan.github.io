import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
  <>
    <Navbar />
    <div className="bg-teal-700">
      <About/>
      <Experience/>
      <Contact/>
    </div>
  </>
    
  );
}
