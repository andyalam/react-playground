import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        const { id } =this.props.match.params;
        if (id !== undefined && id !== null) {
            if (
                this.state.loadedPost === null ||
                (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
            ) {
                axios
                    .get(`/posts/${id}`)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    });
            }
        }
    }

    deletePostHandler = () => {
        const { id } =this.props.match.params;
        axios
            .delete(`/posts/${id}`)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        console.log(this.props);
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;