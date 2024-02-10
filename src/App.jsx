// import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Admin from './Components/Admin/Admin';
import Blog from './Components/Blog/Blog';
import Careers from './Components/Careers/Careers';
import ContactUs from './Components/ContactUs/ContactUs';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Media from './Components/Media/Media';
import Principals from './Components/Principals/Principals';
import Services from './Components/Services/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="font-poppins w-screen overflow-clip no-vertical-scroll md:mt-0 mt-[90px]">
        <Header /> {/* Render the Header component outside of <Routes> */}

        <Routes>
          {/* Define routes for other pages */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<Media />} />
          <Route path="/principals" element={<Principals />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <Footer /> {/* Render the Footer component outside of <Routes> */}
      </div>
    </Router>
  );
}

export default App;

