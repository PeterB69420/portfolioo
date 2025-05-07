import { Link } from "react-router"
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Welcome to My Portfolio</h1>
                <p className="hero__description">Explore my projects and skills.</p>
                <Link to="/projects">
                    <button className="hero__button">View Projects</button>
                </Link>
            </div>
        </div>
    )
}