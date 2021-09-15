import { useState, useEffect } from "react";
import axios from "axios";
import { gitApiUrl, gitApiUrlHeaders } from "../constants/git";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function GitProjectsAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = axios(gitApiUrl, gitApiUrlHeaders)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";
    return (
        <ul>
            {data.map(data => (
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/git.png" />
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                            <a href={data.html_url}><Button variant="primary">{data.language}</Button> </a>

                        </Card.Body>
                    </Card>
                </>
            ))
            }
        </ul>
    );
}
export default GitProjectsAxios;