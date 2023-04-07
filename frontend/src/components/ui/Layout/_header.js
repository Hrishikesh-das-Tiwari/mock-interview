import { NavLink } from 'react-router-dom';
import './NavCss.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Mock Interview
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent41"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav__el nav-link">My Connection</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav__el nav-link nav__el--cta">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;

// <header className="header">
//   <nav className="nav nav--tours">
//     <NavLink to="/" className="nav__el">
//       All tours
//     </NavLink>
//     <form className="nav__search">
//       <button className="nav__search-btn">
//         <svg>
//           <image xlinkHref="/img/icons.svg">Hii</image>
//         </svg>
//       </button>
//       <input
//         type="text"
//         placeholder="Search tours"
//         className="nav__search-input"
//       />
//     </form>
//   </nav>
//   <div className="header__logo">
//     <img src="/img/logo-white.png" alt="Natours logo" />
//   </div>
//   <nav className="nav nav--user">
//     <a href="/" className="nav__el">
//       My bookings
//     </a>
//     {hasCookie && (
//       <NavLink to="/me" className="nav__el">
//         <img
//           src={`/img/users/${image}`}
//           alt="User"
//           className="nav__user-img"
//         />
//         <span>{name}</span>
//       </NavLink>
//     )}

//     {hasCookie && (
//       <NavLink to="/logout" className="nav__el nav__el--cta">
//         Log Out
//       </NavLink>
//     )}
//     {!hasCookie && (
//       <NavLink to="/login" className="nav__el">
//         Log in
//       </NavLink>
//     )}
//     {!hasCookie && (
//       <NavLink to="/signup" className="nav__el nav__el--cta">
//         Sign up
//       </NavLink>
//     )}
//   </nav>
// </header>
