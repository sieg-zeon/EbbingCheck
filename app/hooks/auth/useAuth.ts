import { FirebaseApp, FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const useAuth = () => {
  let app: FirebaseApp;
  let auth: Auth;
  let googleAuthProvider: GoogleAuthProvider;
  const initFirebaseApp = (config: FirebaseOptions): void => {
    googleAuthProvider = new GoogleAuthProvider();
    try {
      app = getApp();
      auth = getAuth(app);
    } catch (e) {
      app = initializeApp(config);
      auth = getAuth(app);
    }
  };

  return { initFirebaseApp, app: app!, auth: auth!, googleAuthProvider: googleAuthProvider! };
};
