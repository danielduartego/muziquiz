import React, { createContext } from "react";
import firebase from "firebase";
import { useSession } from "../utils/auth";

export const UserProfile = () => {
  const { user } = useSession();
  return <div>Hello, {user.displayName}</div>;
};
