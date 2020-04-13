import ReactDOM from 'react-dom';

import React, { Component } from 'react';

export default class App extends Component {
    state = {
        red: 'green'
    };
    render() {
        return (
            <div>
                In Class {this.state.red}
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
