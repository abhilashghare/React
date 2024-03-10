import useFetchData from "./useFetchData";

const Admin = () => {

    const { data, loading, error } = useFetchData('http://localhost:8080/api/welcome')

    return (
        <div className="admin">
            {error && <div>{error}</div>}
            {loading && <div>Loading....</div>}
            <h2>Admin Page</h2>
            {data && <p>Author is {data.name}</p>}
            
        </div>
    );
}

export default Admin;