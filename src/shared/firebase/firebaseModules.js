import firebase from 'firebase';
import { firebaseConfig } from '../../config/firebaseConfig';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();