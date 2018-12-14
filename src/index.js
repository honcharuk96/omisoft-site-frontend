import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
}

render(App);

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default; // eslint-disable-line
//     ReactDOM.render(<NextApp />, document.getElementById('root'));
//   });
// }

if (module.hot) {
  module.hot.accept('./App', () => { render(App) });
}