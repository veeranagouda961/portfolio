import React, { Fragment } from "react";
import Nav from "./components/nav";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
