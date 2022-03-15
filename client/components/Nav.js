import Link from "next/link"

function Nav({setShowLogin}) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">Leasing+</a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            
            <a 
            className="nav-item nav-link text-light" 
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
            
            <Link className="nav-item" href="/features">
              <a className="nav-link text-light" >Features</a>
            </Link>
            
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Nav