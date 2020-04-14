import ReactDOM from 'react-dom';

import React, { Component } from 'react';

type P = {};

type S = {
    message: string
};

export default class App extends Component<P, S> {

    constructor(p: P) {
        super(p);
        this.state = {
            message: ''
        };
    }

    asyncFunction() {
        return Promise.resolve('Red');
    }

    async componentDidMount() {
        this.setState({
            message: await this.asyncFunction()
        });
    }

    render() {
        return (
            <div>
                In Class {this.state.message}
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
