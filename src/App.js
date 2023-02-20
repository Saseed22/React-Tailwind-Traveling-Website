import Activities from "./components/Avtivities";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
