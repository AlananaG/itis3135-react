import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p>&copy; Alana's Amazing Website</p>
            <a href="https://github.com/AlananaG">GitHub</a> |
            <a href="https://webpages.charlotte.edu/agree179/">CLT Web</a> |
            <a href="https://AlananaG.github.io">GitHub.io</a> |
            <a href="https://www.linkedin.com/in/alana-green-20b548296/">LinkedIn</a> |
            <Link to="/firm">Firm Spotlight</Link> |
            <Link to="/crappy-page">Crappy Webpage</Link> |
            <Link to="/intro-form">Introduction Form</Link>
        </footer>
    );
}