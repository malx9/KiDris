const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="login-form flex flex-col justify-center mt-10 gap-7 items-center">
        <input type="text" className="login-form--username w-60 rounded-md" />
        <input
          type="text"
          className="login-form--password w-60 h-40 rounded-md"
        />
      </div>
    </>
  );
};

export default LoginPage;
