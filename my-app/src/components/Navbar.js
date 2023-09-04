import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h4 className="navbar-brand" href="#">Kingdom Carvers</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link active" onClick={() => props.setPage("Home")} aria-current="page">Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" onClick={() => props.setPage("Contact Us")} aria-current="page">Contact Us</button>
              </li>
              <li className="nav-item">
                <button className="nav-link active" onClick={() => props.setPage("About")} aria-current="page">About Us</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
