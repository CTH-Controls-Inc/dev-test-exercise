import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to My App</h1>
      <Link href="/login">
        <Button variant="primary">Login</Button>
      </Link>
    </div>
  );
}
