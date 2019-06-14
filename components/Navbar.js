import Link from 'next/link'
import { useState, useEffect } from 'react'

function Navbar() {

  const [curr, setCurr] = useState('')

  useEffect(() => {
    setCurr(location.pathname)
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className={curr === '/' ? "nav-item active" : "nav-item"}>
              <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className={curr === '/About' ? "nav-item active" : "nav-item"}>
              <Link href="/About"><a className="nav-link">About</a></Link>
            </li>
            <li className={curr === '/ApiPages' ? "nav-item active" : "nav-item"}>
              <Link href="/ApiPages"><a className="nav-link">API</a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;