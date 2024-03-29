import './Navbar.css'

function Navbar() {

  return (
    <nav className='navbar'>
      <img className='nav-logo' src="nav-logo.png" alt="Logo image" />
      <ul className='navbar-btns'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="nav-left">
        <img className='nav-search' src="nav-search-icon.png" alt="" />
        <p className='nav-children'>Children</p>
        <img className='nav-noti' src="nav-noti-icon.svg" alt="" />
        <img className='nav-avatar' src="nav-avatar.png" alt="" />
      </div>
    </nav>
  )
}

export default Navbar