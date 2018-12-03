import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { Provider } from 'react-redux';
import SectionHeader from './components/SectionHeader';


const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,    
  composeEnhancers(applyMiddleware(...middlewares)),
);

if (module.hot) {
  module.hot.accept('reducers', () => {
    const nextRootReducer = rootReducer;
    store.replaceReducer(nextRootReducer);
  });
}
const App = () => (
  <div>
  <SectionHeader/>
  </div>
)

render(<Provider store={store}><App /></Provider >, document.getElementById('app'));