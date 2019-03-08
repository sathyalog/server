import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/Routes';
import {Provider} from 'react-redux';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
            <Routes/>
        </StaticRouter>
        </Provider>
    );
    return `
    <html>
    <head></head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.4/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.1/redux.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.7/angular.min.js"></script>
    </body>
    </html>
    `
}