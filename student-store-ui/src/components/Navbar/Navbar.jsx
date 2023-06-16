import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className = "content">
              <div className="logo">
                <img src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>
              </div>
              <div className="facebook">
                <li>
                  <img src = "https://smallimg.pngkey.com/png/small/0-4258_facebook-logo-facebook-logo.png"/>
                </li>
              </div>
              <div className="socials">
                <li>
                  <img src = "https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png"/>
                </li>
              </div>
              <div className="twitter">
                <li>
                  <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"/>
                </li>
              </div>
            


              <ul className="links">
                <li>
                  {/* <a>Home</a> */}
                  {/* <Link to="/">Home</Link> */}
                  <a href="/">Home</a>
                </li>
                <li>
                  {/* <Link to ="/#About">About us</Link> */}
                  <a href="/#About">About</a>
                </li>
                <li>
                  {/* <Link to = "/#Contact">Contact us</Link> */}
                  <a href ="/#Contact">Contact Us</a>
                </li>
                <li>
                  {/* <Link to = "/#Buy">Buy Now</Link> */}
                  <a href= "/#buy">Buy Now</a>
                </li>
              </ul>
            </div>
    
    </nav>
  )
}
