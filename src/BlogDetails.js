import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchData from "./useFetchData";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, loading, error } = useFetchData('http://localhost:3001/blogs/' + id)
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:3001/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/home');
        })
    }
    return (
        <div className="blog-details">
            {loading && <div> Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;