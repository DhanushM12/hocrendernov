import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HocCounter from './HocCounter';
import Counter from './Counter';
import RenderProps from './RenderProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const Enhanced = HocCounter(Counter);

// root.render(<Enhanced />)
root.render(<RenderProps render={props => <Counter {...props} />} />)