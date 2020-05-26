import React, { createContext, Component } from "react";
import firebase from "firebase";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    isSignedIn: false,
    user: {
      userName: "",
      userEmail: "",
      userPhoto: "",
    },
    points: 12,
    loading: false,
  };

  updateUser = (user) => {
    console.log("from updateUser", !!user);

    this.setState({
      isSignedIn: !!user,
      user: {
        userName: user.displayName,
        userEmail: user.email,
        userPhoto: user.photoURL,
      },
    });
    console.log("from context", this.state.isSignedIn);
  };

  updateLoading = () => {
    this.setState({
      loading: !this.state.loading,
    });
  };

  signOut = () => {
    firebase.auth().signOut();
    window.location = window.location.origin;
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          updateUser: this.updateUser,
          signOut: this.signOut,
          updateLoading: this.updateLoading,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
