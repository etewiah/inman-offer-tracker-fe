import Firebase from 'firebase'


const firebaseApp = Firebase.initializeApp({
  // settings go here
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
