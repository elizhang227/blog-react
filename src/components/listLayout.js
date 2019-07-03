import React, { Component } from 'react';

class ListLayout extends Component {
    state = {
        showDetails: false,
        posts: null,
        postData: null
    }

    render() {
        const { showDetails, postData } = this.state
        return (
            <div>This is a child component</div>
        )
    }
}

export default ListLayout;