import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'normalize.css';
import '@fontsource/roboto';

import {Provider} from 'react-redux';

import {createStore} from 'store/index';

import {initialState as TextInitialState} from 'reducers/text';
import {initialState as ViewInitialState} from 'reducers/view';

import {Typewriter} from 'components/Typewriter';

const store = createStore({
  text: TextInitialState,
  view: ViewInitialState,
});

ReactDOM.render(
    (
        <Provider store={store}>
          <Typewriter/>
        </Provider>
    ),
    document.getElementById('root'),
);
