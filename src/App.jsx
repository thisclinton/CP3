import { IoEarthSharp, IoSearchOutline } from "react-icons/io5";
import "./App.css";
import CTA from "./components/cta/CTA";
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatCAM3,
  Header,
} from "./containers";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatCAM3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
