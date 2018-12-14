import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'reducers';
import SectionCode from './components/SectionCode';
import SectionTechnologies from './components/SectionTechnologies';

import Navigation from 'components/Navigation/';
import AboutOmisoft from 'components/AboutOmisoft/';
import Cloud from 'components/Cloud/Cloud';
import Stars from 'components/Stars';
import SectionPortfolio from './components/SectionPortfolio/SectionPortfolio';
import SectionAbout from './components/SectionAbout/SectionAbout';
import SectionContact from './components/SectionContact/SectionContact';
import SectionFooter from 'components/SectionFooter';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,    
  composeEnhancers(applyMiddleware(...middlewares)),
);

const App = () => (
  <Provider store={store}>
  <div className='body'>
    <Stars>
        <Navigation/>
        <AboutOmisoft/>
        <Cloud/>
    </Stars>

    <SectionCode/>
    
    <Stars>
      <SectionTechnologies/>
    </Stars>

    <SectionPortfolio/>

    <SectionAbout/>
    
    <Stars>
      <SectionContact/>
    </Stars>
    <SectionFooter/>
    <PrivacyPolicy/>
  </div>
  </Provider>
);

export default App;