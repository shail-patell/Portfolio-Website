import Header from "./components/Header"
import './App.css'
import React from "react"
const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon top-bar"></span>
      <span class="toggler-icon middle-bar"></span>
      <span class="toggler-icon bottom-bar"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Header text="Hi there, I'm Shail!"/>
      <h2 id='subtext' className="text-center">I love coding, solving problems, and building cool things!</h2>
      <div id="profilephoto"className="text-center">
      <img className='img-fluid d-none d-lg-block d-md-none d-sm-none' src="/assets/memoji.png" alt="" />
      <img className='img-fluid d-none d-md-block d-lg-none d-sm-none' src="/assets/memoji.png" alt="" />
      <img className='img-fluid d-block d-sm-block d-lg-none d-md-none' src="/assets/memoji.png" alt="" />
      </div>
    </>
  )
}

export default App
