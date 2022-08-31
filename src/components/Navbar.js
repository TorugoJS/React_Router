import "./Navbar.css";

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>

            <NavLink
             to="/"
              className={({ isActive })=>(isActive ? "esta-ativo" : "nao-ativo")}>
                Home
                </NavLink>

            <NavLink to="/about">Sobre</NavLink>




            {/* <Link to="/">Home</Link>
            <Link to="/about">Sobre</Link> */}
        </nav >
    )
}

export default Navbar