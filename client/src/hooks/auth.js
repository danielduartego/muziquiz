import { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase";
import axios from "axios";

export const userContext = createContext({
  user: null,
  loading: false,
});

export const useSession = () => {
  const user = useContext(userContext);
  return user;
};

export const useAuth = () => {
  const [state, setState] = useState(() => {
    console.log("useState");

    const user = firebase.auth().currentUser;
    return { user };
  });

  const onChange = (user) => {
    console.log("onChange");
    if (user) {
      axios
        .get(
          `https://us-central1-muziquiz-app.cloudfunctions.net/api/users/${user.uid}`
        )
        .then((res) => {
          setState({ user: res.data });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    console.log("useEffect");
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};

export const signOut = () => {
  firebase.auth().signOut();
  window.location = window.location.origin;
};
