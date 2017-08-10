import Firebase from 'firebase'


const firebaseApp = Firebase.initializeApp({
  // settings go here
  apiKey: 'AIzaSyC9w8lejfwh7BakjS4xb6F4tlVMaWwPXlA',
  authDomain: 'offer-tracker.firebaseapp.com',
  databaseURL: 'https://offer-tracker.firebaseio.com',
  projectId: 'offer-tracker',
  storageBucket: '',
  messagingSenderId: '912478597249'
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
