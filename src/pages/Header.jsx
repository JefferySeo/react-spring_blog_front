import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RiFacebookCircleFill, RiTwitterFill, RiInstagramFill, RiKakaoTalkFill} from 'react-icons/ri';
import Navigation from '../component/Navigation';

const Header = () => {
    return (
        <header className="header">
            <Container className='py-3'>
                <Row className='justify-content-between align-items-center'>
                    <Col xs={2} className="sns-icons">
                        <RiFacebookCircleFill className='facebook' />
                        <RiTwitterFill className='twitter' />
                        <RiInstagramFill className='instagram' />
                        <RiKakaoTalkFill className='kakaotalk' />
                    </Col>
                    <Col xs={8} className="text-center">
                        <p className='display-6 fw-bold'><Link to="/">Jeffery's BLOG</Link></p>
                        <Navigation />
                    </Col>
                    <Col xs={2} className="text-end">
                        <span className='mx-2'>로그인</span>
                        <span className='mx-2'>회원가입</span>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;