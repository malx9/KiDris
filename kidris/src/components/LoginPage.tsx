import { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="login-wrapper app-login flex justify-center items-center mt-2">
        <form action="" className="login-form flex flex-col lg:w-1/2 w-8/12">
          <div className="flex flex-col gap-2">
            <div className="login-username flex flex-col gap-1">
              <h6 className="font-inter text-[#73008F] text-[.8125rem]">
                Username
              </h6>
              <input
                type="text"
                className="rounded-[3px] h-[45px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] pl-3 text-[13px] font-inter font-[500] caret-[#73008F]"
              ></input>
            </div>
            <div className="login-password flex flex-col gap-1 relative">
              <h6 className="font-inter text-[#73008F] text-[.8125rem]">
                Password
              </h6>
              <input
                type={showPassword ? "text" : "password"}
                className="rounded-[3px] h-[45px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] pl-9 text-[15px] font-inter caret-[#73008F]"
              ></input>
              <i
                className="far fa-eye absolute float-left mt-[39px] ml-3 text-[14px] cursor-pointer"
                id="togglePassword"
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
        </form>
      </div>
      <div className="picture flex justify-center">
        <img src="src/assets/picture.png" className="h-[300px]"></img>
      </div>
    </>
  );
};

export default LoginPage;
