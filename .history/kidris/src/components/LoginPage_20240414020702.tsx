const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="login-form flex flex-col justify-center mt-10 gap-6">
        <input type="text" className="login-form--username" />
        <input type="text" className="login-form--password" />
      </div>
    </>
  );
};

export default LoginPage;
