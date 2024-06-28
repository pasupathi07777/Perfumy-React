import React from "react";

import Navbar from "./components/Navbar.js";
import Search from "./components/Search.js";
import Galary from "./components/Galary.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <>
     
      <Navbar />
      <Search />
      <Galary />
      <About />
      <Footer />
    </>
  );
};

export default App;
