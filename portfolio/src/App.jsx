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
    <div id="homepage">
      <Header text="Hi there, I'm Shail!"/>
      <h2 id='subtext' className="text-center">I love coding, solving problems, and building cool things!</h2>
  <div id="smallmemoji" class='text-center d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'>
      <img id="memoji" className='img-fluid' src="/assets/memoji.png" alt="" />
    </div>
    <div id="mediummemoji" class='text-center d-none d-lg-none d-md-block'>
      <img id="memoji" className='img-fluid' src="/assets/memoji.png" alt="" />
    </div> 
    <div id="largememoji" class='text-center d-none d-lg-block'>
      <img id="memoji" className='img-fluid' src="/assets/memoji.png" alt="" />
    </div>
    <div id='scrolldownsmall' class='text-center d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none'>
    <img id="mousescrolldown" class='img-fluid' src="/assets/scrolling_mousewheel.gif" alt=""/>
    </div>
    <div id='scrolldownmedium' class='text-center d-none d-lg-none d-md-block'>
    <img id="mousescrolldown" class='img-fluid' src="/assets/scrolling_mousewheel.gif" alt=""/>
    </div>
    <div id='scrolldownlarge' class='text-center d-none d-lg-block'>
    <img id="mousescrolldown" class='img-fluid' src="/assets/scrolling_mousewheel.gif" alt=""/>
    </div>
    </div>
    </>
  )
}

export default App
