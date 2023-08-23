import { IoEarthSharp, IoSearchOutline } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <>
      <header className="container">
        <nav className="nav">
          <a href="" className="nav__logo">
            <span className="nav__title">Booking</span>
          </a>

          <div className="nav__center">
            <span>Anywhere</span>
            <div className="nav__center-line"></div>
            <span>Any Week</span>
            <div className="nav__center-line"></div>
            <span>Add Guests</span>
            <IoSearchOutline className="nav__search" />
          </div>

          <div className="nav__right">
            <span className="text">Booking your Home</span>
            <IoEarthSharp />
            <span className="nav__user"></span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
