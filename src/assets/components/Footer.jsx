import React from "react";

function Footer(){
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-light">@YuriKun11</p>
        {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <h1></h1>
        </a> */}
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Terms of Use</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Privacy Policy</a></li>
        </ul>
      </footer>
    );
}

export default Footer