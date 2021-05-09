import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

const App = () => (
    <div>
        <h1>Hello World</h1>
    </div>
);

// eslint-disable-next-line react/no-render-return-value
const render = (Component) => ReactDOM.hydrate(<Component />, document.getElementById('root'));

render(hot(App));
