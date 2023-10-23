import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.text.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);

    //password validation
    if (password.length < 6) {
      new Swal(
        "Too Short password",
        "password must be at least 6 characters long",
        "warning"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      new Swal(
        "Need Capital letter",
        "Requires at least one capital letter",
        "warning"
      );
      return;
    } else if (!/[@#$%^&*!]/.test(password)) {
      new Swal(
        "Need special character",
        "Requires at least one special character",
        "warning"
      );
      return;
    }
    //register user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        new Swal("Good job!", "You have Registered!", "success");

        //updateProfile
        handleUpdateProfile(name, photoURL).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);
        new Swal("OPS!", error.message, "warning");
      });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#070707] from-10% via-[#082718ec] via-50% to-[#1c1b1b] to-90% ...">
        <div className="min-h-screen">
          <div className="max-w-screen-xl mx-auto">
            <div className="py-5">
              <Navbar></Navbar>
            </div>
            <div>
              <div className="mt-4">
                <div className="hero-content flex-col ">
                  <div className="text-center">
                    <h1 className="text-5xl text-[#f43b86] font-bold">
                      Register!
                    </h1>
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#3e087b53]">
                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Name</span>
                        </label>
                        <input
                          type="text"
                          name="text"
                          placeholder="Name"
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Photo URL
                          </span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="Photo URL"
                          className="input input-bordered"
                        />
                      </div>
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
                        <button className="btn btn-primary">Register</button>
                      </div>
                      <div>
                        <p className="text-white">
                          already have account? please
                          <Link className="text-[#f43b86]" to="/login">
                            <span> Login</span>
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

export default Register;
