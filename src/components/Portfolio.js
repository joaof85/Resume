import { useState, useEffect } from "react";
import axios from "axios";
import { gitApiUrl } from "../constants/git";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImgTop from "../git.png";
import "./Portfolio.scss";
import GitTimer from './TimeCounter';




function GitProjectsAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = axios(gitApiUrl, {params: { per_page: 5, type:'member', sort:'updated', diretion:'desc'}})
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
        <div className="wrapper" key={data.id}>
            {data.map(data => (
                <>

                    <Card classname="card" style={{ width: '18rem' }}>
                      
                        <Card.Img variant="top" src={ImgTop} />
                        
                        <Card.Body>
                            <Card.Title className="title">{data.name}</Card.Title>
                            <Card.Text className="text">
                                {data.description}
                            </Card.Text>
                            <a href={data.html_url}><Button classname="button"  variant="primary">View Project</Button> </a>
                            <GitTimer dataFromPortfolio={data} style={{ position: 'fixed', color: 'black', fontWeight: 'bold' }} />
                        </Card.Body>
                    </Card>
                </>
            ))
            }
            
        </div>
    );
}
export default GitProjectsAxios;