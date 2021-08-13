import Head from "next/head";
import Login from "../components/pages/login";

export default function Index() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </>
  );
}
