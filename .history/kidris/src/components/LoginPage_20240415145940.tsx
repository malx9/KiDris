const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="login-wrapper app-login flex justify-center items-center mt-2">
        <form action="" className="login-form flex flex-col lg:w-1/2 w-8/12">
          <div className="flex gap-2">
            <div className="login-username flex flex-col gap-1">
              <h6 className="font-inter text-[#73008F] text-[.8125rem]">
                Username
              </h6>
              <input type="text" className="rounded-[3px] h-[45px]"></input>
            </div>
            <div className="login-password flex flex-col gap-1">
              <h6 className="font-inter text-[#73008F] text-[.8125rem]">
                Password
              </h6>
              <input type="text" className="rounded-[3px] h-[45px]"></input>
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
