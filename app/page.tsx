import Image from "next/image";
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';

export default function Home() {
  return (
  <>
    <Navbar />
    <About/>
    <Experience/>
  </>
    
  );
}
