import GoogleAuthBtn from "../components/GoogleAuthBtn";
import LoginForm from "../components/LoginForm";
import LoginContainerImg from "../components/LoginContainerImg";
import LinkedInAuthBtn from "../components/LinkedInAuthBtn";

const Divider = () => (
  <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
  </div>
);

const Login = () => {
  return (
    <section className="h-dvh flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-0">
      <LoginContainerImg />
      <div className="md:w-1/3 max-w-sm">
        {/* Social Auth */}
        <div className="flex flex-col items-center gap-y-2">
          <label className="mr-1">Sign in with</label>
          <div className="flex justify-center gap-8">
            <GoogleAuthBtn />
            <LinkedInAuthBtn />
          </div>
        </div>
        <Divider />
        {/* Login Form */}
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
