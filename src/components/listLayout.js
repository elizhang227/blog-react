import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostList = styled.ul`
    flex: 0 1 100%
    list-style-type: none;
    margin: 0;
    text-align: left;

    li {
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
    }
`;

class ListLayout extends Component {
    state = {
        showDetails: false,
        posts: [],
        postData: null
    }

    componentDidMount() {
        const { posts } = this.props;
        
        this.setState({
            posts: posts.default
        })
    }

    render() {
        const { posts } = this.state
        return (
            <PostList>
                {posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <Link to={`/post/${post.id}`}>{post.post_title}</Link>
                        </li>
                    )
                })}
            </PostList>
        )
    }
}

export default ListLayout;

ListLayout.propTypes = {
    posts: PropTypes.object
}