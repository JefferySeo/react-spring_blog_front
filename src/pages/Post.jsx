import React, {useState, useEffect} from 'react';
import {Row, Col, Container, Button, Card} from 'react-bootstrap';

const Post = ({id, writer, img, categoryA, categoryB, title, content, wdate}) => {
    const [tit, setTit] = useState('');
    const [cont, setCont] = useState('');
    const t = title.substring(0,100);
    const c = content.replaceAll("\u0026nbsp;", " ").substring(0, 80);
    useEffect(() => {
        setCont(c)
        setTit(t)
    }, [])
    return (
        <Col md={4} className="mb-3">
            <Card>
            
                <Card.Img variant = 'top' src={"data/img/"+img} alt={img}/>
                <Card.Body>
                    <Card.Title>
                        {id}. {title}
                        <small>
                            <span>{categoryA}</span>
                            <span>{categoryB}</span>
                        </small>
                    </Card.Title>
                    <Card.Text>
                        {cont} [{wdate}] 
                    </Card.Text>
                    
                    <div className='btnbox'>
                        {writer}
                        <Button variant="dark">바로가기</Button>
                    </div>
                    
                </Card.Body>
            
            </Card>
        </Col>
        
    );
};

export default Post;