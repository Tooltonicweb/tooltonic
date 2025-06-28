import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/">
          <a className="logo">
            <h1>ToolTonic</h1>
            <p>AI Powered file first aid</p>
          </a>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/tools"><a>All Tools</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header