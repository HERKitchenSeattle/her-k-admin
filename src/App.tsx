import React from 'react';
import Home from './Home';
import Login from './Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const app = initializeApp({
  apiKey: 'AIzaSyBouOK3qYFSPtttpQTIUPR6WDy0AlNvbNY',
  authDomain: 'herkitchenseattle.firebaseapp.com',
  databaseURL: 'https://herkitchenseattle-default-rtdb.firebaseio.com',
  projectId: 'herkitchenseattle',
  storageBucket: 'herkitchenseattle.appspot.com',
  messagingSenderId: '532110473531',
  appId: '1:532110473531:web:b6cdda638b727921d49f1e',
  measurementId: 'G-1W9PF6P5JD',
});

export const auth = getAuth(app);

const App: React.FC = () => {
  let isSignedIn = !!auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    isSignedIn = !!user;
  });

  return (
    <>
      <h1 className="m-6">HER Kitchen Admin</h1>
      {isSignedIn ? <Home /> : <Login />}
    </>
  );
};
export default App;
