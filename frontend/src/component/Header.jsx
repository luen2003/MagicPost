import logo from '../assets/header.jpeg'
import { Link  } from "react-router-dom"

 const  Header = () => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".navbar")
        header.classList.toggle("active",this.window.scrollY > 200)
    })
    return (
        <>
          <marquee>Chào mừng đến với MagicPost</marquee>
        <nav className="navbar">
        <div className="brand-title">
    <img  width={95} height={60} src={logo} />
        <p>Magic Post</p>
        </div>
  <a href="#" className="toggle-button">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </a>
  <div className="navbar-links">
    <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
  <div className='lefmenuinnerinner'>
<div className='navSidebar'>
  <h1>Menu</h1>
  <ul className='menu'>
    <li><Link  to='/search'>Tim kiem</Link></li>
  </ul>
  </div>
</div>
        </>
    )
}
export default Header

