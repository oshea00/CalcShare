import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calcShare from './apis/calcShare';
import { Auth0Provider } from './react-auth0-wrapper';
import config from './auth_config';

const rootElement = document.getElementById('root');

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
  );
};

const renderApplication = (component) => {
    ReactDOM.render(
          <Provider store={store}>
            <ConnectedRouter history={history}>
                <Auth0Provider
                    domain={config.domain}
                    client_id={config.clientId}
                    redirect_uri={window.location.origin}
                    audience={config.audience}
                    onRedirectCallback={onRedirectCallback}
                >
                    {component}
              </Auth0Provider>
            </ConnectedRouter>
        </Provider>,
      rootElement);
}

calcShare.get("Config/Get")
    .then(response => {
        window.Configuration = response.data;
        renderApplication(<App/>);
    })
    .catch(error => {
        console.log(error);
        renderApplication(
            <div>Site Is Unavailable</div>
        );
    });

registerServiceWorker();
