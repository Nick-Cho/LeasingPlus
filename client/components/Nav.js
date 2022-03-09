import Link from "next/link"

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light">Leasing+</a>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <Link class="nav-item" href="/login">
              <a class="nav-link text-light" aria-current="page">Log in</a>
            </Link>
            <Link class="nav-item" href="/sign-up">
              <a class="nav-link text-light" >Sign up</a>
            </Link>
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