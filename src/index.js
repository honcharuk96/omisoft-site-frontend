import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import { Provider } from 'react-redux';
import SectionHeader from './components/SectionHeader';
import SectionCode from './components/SectionCode';
import SectionTechnologies from './components/SectionTechnologies';

import Navigation from 'components/Navigation/';
import AboutMisoft from 'components/AboutMisoft/';
import Cloud from 'components/Cloud/Cloud';
import Stars from 'components/Stars';


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
  {/* <SectionHeader/> */}
  <Stars>
      <Navigation/>
      <AboutMisoft/>
      <Cloud/>
  </Stars>
  <SectionCode/>
  {/* <SectionTechnologies/> */}
  <Stars
   customStyle={{ height: '100px' }} 
  >

  </Stars>
  </div>
)

render(<Provider store={store}><App /></Provider >, document.getElementById('app'));