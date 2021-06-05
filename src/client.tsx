import * as React from 'react';
import * as ReactDOM from 'react-dom';

import '@vkontakte/vkui/dist/vkui.css';

import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import {AdaptivityProvider, AppRoot, ConfigProvider} from '@vkontakte/vkui';

import {createStore} from 'store/index';

import {initialState as TypingInitialState} from 'reducers/typing';

import {Typewriter} from 'containers/Typewriter/Typewriter';

const store = createStore({
  typing: TypingInitialState,
});

import './client.scss';

ReactDOM.render(
    (
        <ConfigProvider>
          <AdaptivityProvider>
            <Provider store={store}>
              <HashRouter>
                <AppRoot>
                  <Typewriter/>
                </AppRoot>
              </HashRouter>
            </Provider>
          </AdaptivityProvider>
        </ConfigProvider>
    ),
    document.getElementById('root'),
);
