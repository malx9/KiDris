import { useState } from "react";
import { useCookies } from "react-cookie";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      login();
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);

  const login = async () => {
    try {
      const response = await Axios.post("http://192.168.1.65:3001/login", {
        username: username,
        password: password,
      });

      console.log("Response from server:", response);

      if (response.data.success && response.data.user.admin === 1) {
        navigate("/admin");
        setCookie("loggedIn", true, { path: "/" });
      } else if (response.data.success && response.data.user.admin === 0) {
        navigate("/driver");
      } else {
        console.log("Username/password wrong");
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="login-wrapper app-login flex justify-center items-center mt-2">
        <form className="login-form flex flex-col lg:w-1/2 w-8/12">
          <div className="flex flex-col gap-2">
            <div className="login-username flex flex-col gap-1">
              <label
                htmlFor="username"
                className="font-inter text-[#73008F] text-[.8125rem]"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="rounded-[3px] h-[45px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] transition border-opacity-0 focus:border-opacity-100 pl-3 text-[13px] font-inter font-[500] caret-[#73008F]"
              ></input>
            </div>
            <div className="login-password flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="font-inter text-[#73008F] text-[.8125rem]"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleEnterPress}
                className="rounded-[3px] h-[45px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] transition border-opacity-0 focus:border-opacity-100 pl-9 text-[15px] font-inter caret-[#73008F]"
              ></input>
              <i
                className="far fa-eye absolute float-left mt-[39px] ml-3 text-[14px] cursor-pointer"
                id="togglePassword"
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={login}
                className="bg-[#72008fa8] font-inter w-[80px] h-[40px] rounded-[8px] mt-[15px] text-white active:bg-[#72008fd3] active:outline-none active:border-[1px] active:border-[#ffffff]"
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="picture flex justify-center mt-[20px]">
        <img src="src/assets/picture.png" className="h-[330px]"></img>
      </div>
    </>
  );
};

export default LoginPage;
