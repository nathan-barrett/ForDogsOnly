import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import firebase from 'firebase';
import 'firebase/firestore';

import rootReducer from '../reducers';


const firebaseConfig = {}; // from Firebase Console
// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
firebase.firestore();


const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
