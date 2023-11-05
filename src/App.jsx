import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs';
import Principals from './Components/Principals/Principals';
import Services from './Components/Services/Services';
import Media from './Components/Media/Media';

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins w-screen overflow-clip no-vertical-scroll">
        <Header /> {/* Render the Header component outside of <Routes> */}

        <Routes>
          {/* Define routes for other pages */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Principals" element={<Principals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<Media />} />
        </Routes>

        <Footer /> {/* Render the Footer component outside of <Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

