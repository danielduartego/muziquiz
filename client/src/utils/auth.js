import { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase";
import axios from "axios";

export const userContext = createContext({
  user: null,
  points: null,
  loading: null,
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
  const onChange = async (user) => {
    const userPoints = getPoints(user.uid);
    console.log(userPoints);
    setState({ loading: false, points: 0, user });
  };

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};

export const signOut = () => {
  firebase.auth().signOut();
  // window.location = window.location.origin;
};

const getPoints = (userId) => {
  axios
    .get(
      `https://us-central1-muziquiz-app.cloudfunctions.net/api/points/${userId}`
    )
    .then((res) => {
      console.log(res.data.points);

      return res.data.points;
    })
    .catch((err) => console.log(err));
};
