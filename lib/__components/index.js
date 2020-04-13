import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    return (
        <div>
            Yo Webpack is on watch now!
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
