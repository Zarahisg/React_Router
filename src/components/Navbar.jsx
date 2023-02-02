import { Link} from "react-router-dom";

export default function Navbar () {
    return (
        
        <div className="d-flex  mb-3  fs-4 " id="navbar">
        <Link to="/" className= "m-3 p-2 text-dark text-decoration-none mx-5"> 🏡 Home</Link>
        <Link to="/Contact" className= "m-3 p-2 text-dark text-decoration-none mx-5"> ✉️ Contact</Link>
        <div className="ms-auto p-4 text-dark mx-5">Happy Cake 🍰 </div>
    </div>
        
    )
}