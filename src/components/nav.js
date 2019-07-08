import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UlStyle = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
`;

const LiStyle = styled.li`
    margin: 0 10px;
`;


const Nav = props => {
    const { routes } = props;
    return (
        <nav>
            <UlStyle>
                {routes.map(route => (
                <LiStyle key={`link-${route.linkName}`}>
                    <Link to={route.linkRoute}>{route.linkName}</Link>
                </LiStyle>
                ))}
            </UlStyle>
        </nav>
    )
}

export default Nav

Nav.propTypes = {
    routes: PropTypes.array
}