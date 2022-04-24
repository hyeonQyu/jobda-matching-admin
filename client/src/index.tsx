import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { StoreContext } from '@contexts/StoreContext';
import Store from '@stores/Store';

ReactDOM.render(
    // <HashRouter>
    <StoreContext.Provider value={new Store()}>
        <App />
    </StoreContext.Provider>,
    // </HashRouter>,
    document.getElementById('root'),
);
