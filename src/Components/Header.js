  import React from 'react';
  import '../Styles/header.css';
//   import hero from "../Images/desktop/image-hero.jpg"
  
  function Header(props) {
      return (
          <div className="header">
              <nav className="navbar navbar-expand-lg text-light mx-5 pt-4">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">loopstudios</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Support</a>
                        </li>
                    </ul>
                    </div>  
                </div>
                </nav>

                <div className="header-content">
                    <h1 className="text-light border px-4 py-3">IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                </div>
          </div>
      );
  }
  
  export default Header;