import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/pos-index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/*<App />*/}
    <BrowserRouter>
        <div>
            <Route path={'/'} component={PostsIndex}/>
        </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
