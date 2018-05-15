import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import logger from 'redux-logger';
import firebase from 'firebase';
import 'firebase/firestore';

import rootReducer from '../reducers';


const firebaseConfig = {
  apiKey: 'AIzaSyBxYQHskBzmD9hhtVletHmS4qaUopFFFuk',
  authDomain: 'for-dogs-only.firebaseapp.com',
  databaseURL: 'https://for-dogs-only.firebaseio.com',
  projectId: 'for-dogs-only',
  storageBucket: 'for-dogs-only.appspot.com',
  messagingSenderId: '914277979354',
};
firebase.initializeApp(firebaseConfig);

firebase.firestore();

const createStoreWithFirebase = compose(reduxFirestore(firebase))(createStore);

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStoreWithFirebase(rootReducer, applyMiddleware(...middleware));
export default store;
