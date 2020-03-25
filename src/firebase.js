import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAtE6XoGewdmYMXI-89mygK3uyUfNZyzjk',
  authDomain: 'bt3103-5a943.firebaseapp.com',
  databaseURL: 'https://bt3103-5a943.firebaseio.com',
  projectId: 'bt3103-5a943',
  storageBucket: 'bt3103-5a943.appspot.com',
  messagingSenderId: '421096000425',
  appId: '1:421096000425:web:4b36e92faa8f393978d2b8',
  measurementId: 'G-FLB20M676C'
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
