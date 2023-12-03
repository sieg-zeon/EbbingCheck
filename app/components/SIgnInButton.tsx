import { Auth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

// グーグルボタンでサインイン
export const SignInButton = ({ auth, provider }: { auth: Auth; provider: GoogleAuthProvider }) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    //この後にusers→uid→scoreをfirestoreで格納しないといけない。これが分からん。
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
};

//グーグルでサインアウト
export const SignOutButton = ({ auth }: { auth: Auth }) => {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
};
