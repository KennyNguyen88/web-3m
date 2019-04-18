import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import { appReducer, pingEpic } from "./app";
import { reducer as formReducer } from 'redux-form';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';

import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './firebase';

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
firebase.initializeApp(firebaseConfig);

// Add BOTH store enhancers when making store creator
const createStoreWithFirebase = compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const rootEpic = combineEpics(
    pingEpic
);
const epicMiddleware = createEpicMiddleware();

const rootReducer = combineReducers(
    {
        app: appReducer,
        form: formReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStoreWithFirebase(
    rootReducer,
    composeEnhancers(
        applyMiddleware(logger, epicMiddleware)
    )
);

epicMiddleware.run(rootEpic);