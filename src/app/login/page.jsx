"use client";
import SignUpForm from "components/form";

export default function Login() {
  return (
    <div className="bg-green-300 text-center text-white h-screen">
      {/* <Head>
        <title>face.IO login/signup form</title>
        <meta name="description" content="a face.IO login form" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        <h1 className="text-xl font-bold">home</h1>
        <SignUpForm />
      </main>
    </div>
  );
}
