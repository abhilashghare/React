import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>The Abhi Demo</h1>
        <div className="links">
            <Link to ="/">Home</Link>
            <Link to="/create"
            // style={
            //     {
            //         color:"white",
            //         backgroundColor:"#f1356d",
            //         borderRadius:'8px'
            //     }}
            > 
            Create</Link>
            <Link to ="/Admin">Admin</Link>
        </div>
    </nav>
      );
}
 
export default Navbar;