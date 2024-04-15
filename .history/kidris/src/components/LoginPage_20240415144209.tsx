const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="app-login flex justify-center items-center mt-5">
        <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
          <div>
            <input type="text"></input>
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
