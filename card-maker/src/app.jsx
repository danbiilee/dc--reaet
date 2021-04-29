import React, { useEffect, useState } from 'react';
import './app.css';
import Login from './page/login';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  const providers = {
    google: new window.firebase.auth.GoogleAuthProvider(),
    github: new window.firebase.auth.GithubAuthProvider(),
  };

  const handleSignIn = type => {
    window.firebase.auth().signInWithRedirect(providers[type]);
  };

  const handleSignOut = () => {
    window.firebase
      .auth() //
      .signOut()
      .then(setUser(null))
      .catch(console.log);
  };

  useEffect(() => {
    window.firebase
      .auth()
      .getRedirectResult()
      .then(result => {
        console.log(result);
        setUser(result.user);
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Login
      user={user}
      handleSignIn={handleSignIn}
      handleSignOut={handleSignOut}
    />
  );
}

export default App;
