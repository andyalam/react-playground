import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickedHandler = (course) => {
        this.props.history.push({
            pathname: `/courses/${course.id}`,
            search: `?title=${course.title}`
        });
    };

    render () {
        const courses = this.state.courses.map(course => {
            return (
                <article
                    onClick={() => this.courseClickedHandler(course)}
                    className="Course"
                    key={course.id}>
                    {course.title}
                </article>
            );
        });
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path="/courses/:id" exact component={Course} />
            </div>
        );
    }
}

export default Courses;