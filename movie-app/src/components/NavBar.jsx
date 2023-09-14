import React from "react";
import LogoImg from './images/image (2).webp';
import PogoImg from './images/image.webp';

const Navbar = () => {
    return<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={LogoImg} alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/> MovieBox</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
      <form class="d-flex w-50 text-center" role="search">
        <input class="form-control me-2" type="search" width="3110" placeholder="What do you want to watch" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul class="navbar-nav   mb-lg-0"> 
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><img src={PogoImg} alt="Logo" width="30" height="30" class="d-inline-block align-text-top"/></a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
};

export default Navbar;


