import { Input } from "@/components/ui/input";
import LoginForm from "./form";

const Login = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Login
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
