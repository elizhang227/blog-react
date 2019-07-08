import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostData = props => {
    const { postData } = props;
    return (
        <DivStyle>
            <h1>{postData.post_title}</h1>
            <p>{postData.post}</p>
        </DivStyle>
    )
}

export default PostData;

PostData.propTypes = {
    postData: PropTypes.object
}