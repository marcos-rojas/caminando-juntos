import { Link, useNavigate } from "react-router-dom";
import useUser from '../hooks/useUser';
import '../assets/navigation.css'

export default function Navbar() {
    const { isLogged, logout } = useUser();
    return (
        <header>
            <nav className="principal--navbar">
                <Link
                    to={`/`}
                    className="nav--title"> &#128054; Huellas a casa</Link>
                <div className="state--navbar">
                    <form className="search--form">
                        <input
                            className="search--input"
                            type="search"
                            placeholder="Buscar por nombre"
                            aria-label="Search"
                        />
                        <button className="search--btn" type="submit">&#x1F50D;</button>
                    </form>

                    {isLogged ?
                        (<div className="nav--item"><Link to={`/`}>Log out</Link></div>)
                        : (
                            <>
                                <div className="nav--item">
                                    <Link to={`/login`}>Login</Link>
                                </div>
                                <div className="nav--item">
                                    <Link to={`/register`}>Register</Link>
                                </div>
                            </>
                        )
                    }

                </div>
            </nav>
            <div>
                <ul className="small--navbar">
                    <li> <Link to={`/mascotas`}>Adoptar</Link></li>
                    <li> <Link to={`/`}>Apadrinar</Link></li>
                    <li> <Link to={`/`}>Comunidades</Link></li>
                    <li> <Link to={`/`}>Consultas</Link></li>
                </ul>
            </div>
        </header>
    );
}