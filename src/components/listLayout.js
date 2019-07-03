import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostList = styled.ul`
    list-style-type: none;
    margin: 0;
    text-align: left;
    max-width: 25%;
    width: 100%;

    li {
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
    }
`;

const PostDetails = styled.div`
    max-width: 75%;
    margin: 0;
    width: 100%;

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
        const { posts, showDetails, postData } = this.state
        return (
            <PostDetails>
                <PostList>
                    {posts.map((post, index) => {
                        return (
                            <li key={index}>{post.post_title}</li>
                        )
                    })}
                </PostList>
            </PostDetails>
        )
    }
}

export default ListLayout;

ListLayout.propTypes = {
    posts: PropTypes.object
}