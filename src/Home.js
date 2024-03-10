import BlogList from "./BlogList";
import useFetchData from "./useFetchData";
const Home = () => {

    const { data: blogs, loading, error } = useFetchData('http://localhost:3001/blogs')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'abhilash')} title={"Abhilash Blogs"} />}
        </div>
    );
}

export default Home;