'use strict';

import React from 'react';

import Hello from './Hello.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Hello name="Koko"/>
            </div>
        );
    }
}

export default App;
