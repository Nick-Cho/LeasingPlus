import Link from "next/link"

function Nav({showLogin,setShowLogin}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light">Leasing+</a>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            
            <a 
            class="nav-item nav-link text-light" 
            style = {{cursor:"pointer"}} 
            onClick={()=>{setShowLogin(true)}}>
              Log in
            </a>
            <a 
            className=" nav-item nav-link text-light" 
            style = {{cursor:"pointer"}} 
            onClick={()=>{setShowLogin(true)}}>
            Sign up
            </a>
            
            <Link class="nav-item" href="/features">
              <a class="nav-link text-light" >Features</a>
            </Link>
            
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Nav