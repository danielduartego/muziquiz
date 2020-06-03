import { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase";
import axios from "axios";

export const userContext = createContext({
  user: null,
});

export const useSession = () => {
  const user = useContext(userContext);
  return user;
};

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return { user };
  });

  const onChange = (user) => {
    if (user) {
      axios
        .get(
          `https://us-central1-muziquiz-app.cloudfunctions.net/api/users/${user.uid}`
        )
        .then((res) => {
          setState({ user: res.data });
        })
        .catch((err) => {
          // Get user details while firebase function create user details
          // Only run on first time login when create a user
          if (err.response.status === 404) {
            setState({
              user: {
                userId: user.uid,
                userName: user.displayName,
                userEmail: user.email,
                userPhoto: user.photoURL,
                userPoints: 0,
              },
            });
          } else {
            console.log(err);
          }
        });
    }
  };

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};

export const signOut = () => {
  firebase.auth().signOut();
  window.location = window.location.origin;
};
