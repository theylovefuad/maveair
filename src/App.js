import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BannerII from "./components/BannerII";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";

import { useState } from "react";


function App() {
  const [show, setShow] = useState(false)
  return (
    <body>
      <Nav show={show} setShow={setShow} />
      <div className={show ? 'shade' : ''}>
        <Banner />
        <Hero />
        <Services />
        <BannerII />
        <Destinations />
        <Footer />
      </div>

    </body>
  );
}

export default App;
