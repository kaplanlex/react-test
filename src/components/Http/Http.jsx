import { useEffect, useState } from "react";
import axios from "axios";

const Http = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
                console.log(response);
                setArticles(response.data.hits);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Latest articles</h1>
            {loading && <p>Loading data, please wait...</p>}
            {error && (
                <p>Whoops, something went wrong! Please try reloading this page!</p>
            )}
            {articles.length > 0 && (
                <ul>
                    {articles.map(({ objectID, url, title }) => (
                        <li key={objectID}>
                            <a href={url} target="_blank" rel="noreferrer noopener">
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Http;
