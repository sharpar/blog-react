import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    render() {
        return (
            <form action="">
                <Field
                    name={'title'}
                    component={''}/>
            </form>
        )
    }
}

export default reduxForm({
    // configuration options
    form: 'PostsNewForm' // form name, needs to be unique
})(PostsNew);