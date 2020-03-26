import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDBLi7-MC68_nuJFm76vUgxkwM6r00njAk',
  authDomain: 'groceryaxios-439e8.firebaseapp.com',
  databaseURL: 'https://groceryaxios-439e8.firebaseio.com',
  projectId: 'groceryaxios-439e8',
  storageBucket: 'groceryaxios-439e8.appspot.com',
  messagingSenderId: '98670865142',
  appId: '1:98670865142:web:6f1d877b6b475771d99ad7',
  measurementId: 'G-NSSZMX4QD1'
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
