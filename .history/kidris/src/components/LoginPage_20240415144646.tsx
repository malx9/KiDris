const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="app-login flex justify-center items-center mt-5">
        <form action="" className="flex flex-col lg:w-1/2 w-8/12">
          <div className="flex flex-col gap-2">
            <h6>Username</h6>
            <input type="text" className=""></input>
          </div>
          <div className="flex flex-col gap-4">
            <h6>Password</h6>
            <input type="text"></input>
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
