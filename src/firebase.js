import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyB5B5CxnpV900fU0E-r8YO5jHqTvyE6L-Q',
  authDomain: 'groceryaxios-78d4b.firebaseapp.com',
  databaseURL: 'https://groceryaxios-78d4b.firebaseio.com',
  projectId: 'groceryaxios-78d4b',
  storageBucket: 'groceryaxios-78d4b.appspot.com',
  messagingSenderId: '590950854977',
  appId: '1:590950854977:web:bdb2c725eec3d48b1ab1c0',
  measurementId: 'G-RLE34PG8XP'
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
