import React, {useState, useEffect } from "react"
import "./Nav.css"

const Nav = () => {
  const [show,handleShow]=useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="netflix-logo"
      />

      <img
        className="nav_avatar"
        src="https://www.kindpng.com/picc/m/22-224091_avatar-computer-icons-blog-clip-art-avatar-png.png"
        alt="netflix-avatar"
      />
    </div>
  )
}

export default Nav
