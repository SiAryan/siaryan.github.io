
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/images/may-riding-bicycle-pokemon-emerald-pixel-moewalls-com.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content */}
      <div className="relative bg-transparent">
        <About />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

