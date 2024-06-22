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
        <nav class="navbar">
        <div class="brand-title">
    <img  width={95} height={60} src={logo} />
        <p>Magic Post</p>
        </div>
  <a href="#" class="toggle-button">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </a>
  <div class="navbar-links">
    <ul>
      <li><a href="#">Login</a></li>
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
    <li><Link className='boxMenu' to= '/orderManagement'>Quan ly don hang</Link></li>
  </ul>
  </div>
</div>
        </>
    )
}
export default Header

