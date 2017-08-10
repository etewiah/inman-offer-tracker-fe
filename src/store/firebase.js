import Firebase from 'firebase'


const firebaseApp = Firebase.initializeApp({
  apiKey: process.env.FIREBASE_API,
  authDomain: 'offer-tracker.firebaseapp.com',
  databaseURL: 'https://offer-tracker.firebaseio.com',
  projectId: 'offer-tracker',
  storageBucket: '',
  messagingSenderId: process.env.FIREBASE_SENDER
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
