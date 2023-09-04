import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";


export default function App() {

  const [page, setPage] = useState("Home");

  if (page === "Home") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Home />
      </>
    );
  } else if (page === "Contact Us") {
    return (
      <>
        <Navbar setPage={setPage} />
        <Contact />
      </>
    );
  } else {
    return (
      <>
        <Navbar setPage={setPage} />
        <About />
      </>
    );
  }
}