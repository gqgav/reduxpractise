import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import movies from "./reducers/index"

import './index.css'
import App from "./components/App";

const store = createStore(movies);

console.log('store',store);
console.log('storeMovies',store.getState())

ReactDOM.render(
    <App store={store} />
,  document.getElementById('root')
)
