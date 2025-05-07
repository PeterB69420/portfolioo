import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <>
            <header className="navbar-header">
                <nav className="navbar-header__nav">
                    <ul className="navbar-header__list">
                        <Link to={`/`}>
                        <li className="navbar-header__item"><IoMdHome className="nav-header__icon" /> Home</li>
                        </Link>
                        <Link to={`/`}>
                        <li className="navbar-header__item"><CgProfile className="nav-header__icon" /> About me</li>
                        </Link>
                        <Link to={`/Projects`}>
                        <li className="navbar-header__item"><GoProjectRoadmap className="nav-header__icon" /> Projects</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}