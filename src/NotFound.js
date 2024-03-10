import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Page Cannot Be Found</p>
            <Link to="/" className="back-link">Back To HomePage..</Link>
        </div>
    );
}

export default NotFound;