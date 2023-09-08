// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";
import { AppRegistry } from 'react-native';
import { getDatabase } from "firebase/database";

import { name as appName } from './app.json';
import App from './App';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrSuWFtOqjKkaJolfJLINer4UCF_xUPVM",
  authDomain: "native2-5323c.firebaseapp.com",
  projectId: "native2-5323c",
  storageBucket: "native2-5323c.appspot.com",
  messagingSenderId: "818011206817",
  appId: "1:818011206817:web:e101d99487f9c6e3ccace0",
  measurementId: "G-6L6ZCJDVMS"
};

// Initialize Firebase


const app = firebase.initializeApp(firebaseConfig);
AppRegistry.registerComponent(appName, () => App);


const auth = firebase.auth()

export { auth };
export const db = getDatabase(app)
const analytics = getAnalytics(app);


