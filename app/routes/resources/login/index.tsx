import { ActionFunctionArgs } from "@remix-run/node";
import {
  // Form,
  useFetcher
} from "@remix-run/react";
// import { Input, SubmitButton } from "~/component/Form"

export const RoutePath = "/resources/login"

export const action = async ({ request }: ActionFunctionArgs) {
  // 省略
}

export const InlineLogin = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="POST" action={RoutePath}>
      {/* <Input name="email" required type="email" />
      <Input name="password" required type="password" />
      <SubmitButton loading={fetcher.state !== "idle"}>ログイン</SubmitButton> */}
    </fetcher.Form>
  );
};
