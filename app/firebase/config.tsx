import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCf_5UghfYbeDS9cKzU_MlBxMGKnATcxbw',
  authDomain: 'notes-e70b4.firebaseapp.com',
  projectId: 'notes-e70b4',
  storageBucket: 'notes-e70b4.appspot.com',
  messagingSenderId: '915157928858',
  appId: '1:915157928858:web:acd83628c31eff15354823',
  measurementId: 'G-6VQHBYNQ5K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
