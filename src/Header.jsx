import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>Alana Green's Ambitious Gecko | ITIS 3135</h1>
            <nav className="primary">
                <Link to="/survey">Survey</Link> | 
                <Link to="/gallery">Gallery</Link> |
                <Link to="/inventory">Inventory</Link> |
                <Link to="/instructions">Instructions</Link> |
                <Link to="/highlight">Highlight</Link> |
                <Link to="/website-evaluations">Website Evaluations</Link> |
                <Link to="/intro-form">Introduction Form</Link>
            </nav>
            <nav className="secondary">
                <Link to="/">Home Page</Link> | 
                <Link to="/introduction">About Me</Link> |
                <Link to="/contract">Contract Page</Link> |
                <Link to="/crappy-page">Crappy Page</Link> |
                <Link to="/hobby">My Hobby Page</Link>
            </nav>
        </header>
    );
}