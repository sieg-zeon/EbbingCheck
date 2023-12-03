import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useStore } from "../store/useStore";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const { user } = useStore();

  return (
    <div>
      <main>
        {user && <p>{user.uid}</p>}
        <Link to="/auth">to auth</Link>
      </main>
    </div>
  );
}
