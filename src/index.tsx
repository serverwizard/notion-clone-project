import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import rootReducer from './store/modules';
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
