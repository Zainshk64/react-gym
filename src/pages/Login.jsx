import React, { useState } from "react";
import dumbell from "../../public/favion.png";
const Login = () => {
  const [Signin, setSignIn] = useState("Sign In");
  const[name ,setname] =useState("")
  const[email ,setEmail] =useState("")
  const[pass ,setPass] =useState("")

   return (
    <>
      <div className="bgimg py-5 max-w-screen-2xl flex justify-center items-center h-screen">
        <div className="container ">
          <div className="flex mx-auto justify-center items-center mb-10 mt-6 rounded-md backdrop-blur-lg border lg:w-1/2 md:w-[70%]   ">
            <div className="lg:py-5 md:py-10 py-5 px-5 trans">
              <div className="flex flex-row-reverse items-center mb-5 justify-center gap-3">
                <img src={dumbell} alt="" width={50} />
                <h1 className="lg:text-[35px] md:text-[45px] text-xl text-white">
                  Planet <span className="text-secondary">Fitness</span>
                </h1>
              </div>
              <h1 className="md:mb-14 mb-7 lg:mb-7 lg:text-[35px] md:text-[45px] text-2xl text-white font-bold tracking-wide ">
                {Signin}
              </h1>
              <div>
                {Signin === "Sign Up" ? (
                  <div>
                    <input
                      type="name"
                      name=""
                      className="mb-4 lg:px-3 px-5 lg:py-2 py-4 w-full lg:w-[20em] rounded-lg"
                      placeholder="First Name"
                      id="firstname"
                      onChange={()=> setname(e.target.value)}
                    />{" "}
                    <br />
                    <input
                      type="Name"
                      name=""
                      className="mb-4 lg:px-3 px-5 lg:py-2 py-4 w-full lg:w-[20em] rounded-lg"
                      placeholder="Last Name"
                      id="lastname"
                    />{" "}
                    <br />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <input
                type="email"
                name="email"
                className="mb-4 lg:px-3 px-5 lg:py-2 py-4 w-full lg:w-[20em] rounded-lg"
                placeholder="Email"
                id=""
                onChange={(e)=>setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                name="password"
                className="mb-4 lg:px-3 px-5 lg:py-2 py-4 w-full lg:w-[20em] rounded-lg"
                placeholder="Password"
                id=""
                onChange={(e)=> setPass(e.target.value)}
              />{" "}
              <br />
              <div>
                <button className="bg-orange-400 hover:bg-orange-300 trans mb-5 w-full lg:py-2 py-3 rounded-md">
                  {Signin}
                </button>
              </div>
              <div>
                {Signin === "Sign In" ? (
                  <p className="text-gray-300 font-normal trans">
                    New To Planet Fitness
                    <span
                      className="text-orange-300 ml-2 cursor-pointer"
                      onClick={() => {
                        setSignIn("Sign Up");
                      }}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p className="text-gray-300 font-normal">
                    Have An Account
                    <span
                      className="text-orange-300 ml-2 cursor-pointer"
                      onClick={() => {
                        setSignIn("Sign In");
                      }}
                    >
                      Sign In
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
