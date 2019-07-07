import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.h1`
    display: flex;
    justify-content: center;
    color: blue;
    background-color: orange;
`;

const Header = props => {
    return (
        <header>
            <HeaderStyle>My React Blog</HeaderStyle>
        </header>
    )
}
export default Header;