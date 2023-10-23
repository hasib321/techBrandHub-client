import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    //login with email & password
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };

  //login with Google
  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        new Swal("Good job!", "Successfully logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "error");
      });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#070707] from-10% via-[#082718ec] via-50% to-[#1c1b1b] to-90% ...">
        <div className="min-h-screen">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="py-5">
              <Navbar></Navbar>
            </div>
            <div>
              <div className="mt-8">
                <div className="hero-content flex-col ">
                  <div className="text-center">
                    <h1 className="text-5xl text-[#f43b86] font-bold">
                      Login now!
                    </h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#3e087b53]">
                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Password
                          </span>
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover text-white"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                      <div className="mt-3">
                        <div className="flex items-center  gap-1">
                          <h1 className="text-white">Or login with</h1>
                          <div className="mt-2">
                            <AiFillGoogleCircle
                              onClick={handleGoogleLogIn}
                              className="text-red-600 text-4xl cursor-pointer"
                            ></AiFillGoogleCircle>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-white">
                          Don't have account? please
                          <Link className="text-[#f43b86] " to="/register">
                            <span> Register</span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
