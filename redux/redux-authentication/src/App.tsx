import React from 'react';
import Main from './pages/Main'
import { Provider } from 'react-redux';
import { store } from './store';

function App() {  
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
