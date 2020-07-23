import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';

import HomePage from './pages/Home';
import EditPage from './pages/Edit';

const App: React.FC = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route exact path="/" render={() => <Redirect to="/home" />} />
                        <Route path="/home" component={HomePage} exact={true} />
                        <Route path="/edit" component={EditPage} exact={true} />
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        </PersistGate>
    </Provider>
);

export default App;
