import React from 'react'

const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
        
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
      </nav>
        </div>
    )
}

export default Navbar
