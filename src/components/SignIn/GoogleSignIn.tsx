import React from "react";
import GoogleButton from "react-google-button";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
interface GoogleSignInProps {
  handleGoogleSignInSuccess: (result: any) => void;
}

const GoogleSignIn = ({ handleGoogleSignInSuccess }: GoogleSignInProps) => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      // Call the success handler function
      handleGoogleSignInSuccess(result);
    } catch (error) {
      // Handle sign-in failure
      console.error(error);
    }
  };

  return (
    <GoogleButton
      type="light"
      onClick={handleGoogleSignIn}
      style={{ order: "4" }}
    />
  );
};

export default GoogleSignIn;
