import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Abhi')
    const [loading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        const blog = { title, body, author }
        setIsLoading(true);
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={event => setAuthor(event.target.value)}>
                    <option value="Abhi">Abhi</option>
                    <option value="Abhilash">Abhilash</option>
                </select>
                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding blog..</button>}
            </form>
        </div>
    );
}

export default Create;