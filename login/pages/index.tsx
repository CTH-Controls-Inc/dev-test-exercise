import HTMLHead from "../layouts/HTMLHead";
import Footer from "../layouts/Footer";
import Login from "../components/Login";

export default function Home() {
  return (
    <main>
      <HTMLHead />
      <Login />
      <Footer />
    </main>
  );
}
