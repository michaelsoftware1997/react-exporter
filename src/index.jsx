import React from 'react';
import {render} from 'react-dom';
import 'es6-symbol/implement';

import Example from './components/Example';

render(
    <Example/>,
    document.querySelector('#app')
);