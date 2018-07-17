import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';

// Components
import PostsIndex from './components/pos-index';
import PostsNew from './components/posts-new';
import PostsShow from './components/posts-show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {/*<App />*/}
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path={'/posts/new'} component={PostsNew}/>
                    <Route path={'/posts/:id'} component={PostsShow}/>
                    <Route path={'/'} component={PostsIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container')
);
