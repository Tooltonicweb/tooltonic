import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>ToolTonic</h3>
          <p>AI Powered file first aid</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Tools</h4>
            <ul>
              <li><a href="/mp3-cutter">MP3 Cutter</a></li>
              <li><a href="/image-resizer">Image Resizer</a></li>
              <li><a href="/pdf-merger">PDF Merger</a></li>
              <li><a href="/video-converter">Video Converter</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com/tooltonic" target="_blank" rel="noopener noreferrer">FB</a>
          <a href="https://twitter.com/tooltonic" target="_blank" rel="noopener noreferrer">TW</a>
          <a href="https://instagram.com/tooltonic" target="_blank" rel="noopener noreferrer">IG</a>
          <a href="https://github.com/tooltonic" target="_blank" rel="noopener noreferrer">GH</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ToolTonic.io. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer