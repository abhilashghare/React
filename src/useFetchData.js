import { useEffect, useState } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not connect to Server');
                    }
                    console.log(res.body)
                    return res.json();
                })
                .then(data => {
                    setLoading(false);
                    setData(data);
                    setError(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch Aborted');
                    } else {
                        console.log(err.message)
                        setError(err.message);
                        setLoading(false);
                    }
                })
        }, 1000);

        // abort the fetch
        return () => abortCont.abort();
    }, [url])
    return { data, loading, error }

}

export default useFetchData;