import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.h2`
    display: flex;
    justify-content: center;
    color: blue;
    background-color: orange;
`;

const Footer = props => {
    return (
        <footer>
            <FooterStyle>&copy; 2019 - Eli Zhang</FooterStyle>
        </footer>
    )
}
export default Footer;