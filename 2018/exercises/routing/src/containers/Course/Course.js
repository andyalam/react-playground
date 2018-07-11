import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null,
        id: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        console.log('loaddata');
        const { id } = this.props.match.params;
        if (id !== null && id !== undefined) {
            if (this.state.id !== id) {
                this.setState({ id });
            }
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;