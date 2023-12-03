import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { LoaderFunctionArgs, json } from "@remix-run/node";
import { firebaseConfig } from "config/firebase";
// import { FirebaseOptions } from "firebase/app";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const config = firebaseConfig;
  return json(config);
};

export default function App() {
  // const config = useLoaderData<FirebaseOptions>();
  // console.log({ config });
  // const { initFirebaseApp } = useAuth();
  // initFirebaseApp(config);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
