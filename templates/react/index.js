import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div><h1>Hello World</h1></div>;

// eslint-disable-next-line react/no-render-return-value
const render = (Component) => ReactDOM.render(<Component />, document.getElementById('root'));

render(hot(App));