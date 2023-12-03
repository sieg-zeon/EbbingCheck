// import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignInButton, SignOutButton } from "~/components/SIgnInButton";
// // import { useAuth } from "~/hooks/auth/useAuth";
import { UserInfo } from "~/templates/UserInfo";

import { auth, googleAuthProvider } from "config/firebase";

const Index = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton auth={auth} />
        </>
      ) : (
        <SignInButton auth={auth} provider={googleAuthProvider} />
      )}
    </div>
  );
};

export default Index;
