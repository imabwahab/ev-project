import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navLogo">Ev-Olutions</div>
      
      <ul className='navList'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='contact'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
