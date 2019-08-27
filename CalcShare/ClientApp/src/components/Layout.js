import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import './NavMenu.css';

export default props => (
<div>
    <NavMenu />
    <Container>
    {props.children}
    </Container>
    <footer className="footer">
            <img alt="logo" src="/foxlogo.ico" />       
            <a className="footerlink" href="http://www.th2code.com">www.th2code.com</a>
    </footer>
</div>
);
