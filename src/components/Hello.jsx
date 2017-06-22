'use strict';

require('./hello.scss');

import React from 'react';

const Hello = ({name}) => (
    <h2 className="hello-text">Hello, {name}</h2>
);

export default Hello;
