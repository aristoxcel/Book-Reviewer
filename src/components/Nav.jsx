import { NavLink } from "react-router-dom"



function Nav() {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/listedBook'}>Listed Books</NavLink></li>
        <li><NavLink to={'/pageToRead'}>Pages to Read</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </>
  return (
    <div>

<div className="navbar bg-base-100 my-5 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl md:text-3xl font-semibold md:font-extrabold">Bookish</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-1 text-lg font-semibold">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    <a className="btn bg-[#23BE0A] text-white font-semibold text-lg rounded-lg">Sign In</a>
    <a className="btn bg-info font-semibold text-white text-lg rounded-lg">Sign Up</a>
  </div>
</div>

    </div>
  )
}

export default Nav