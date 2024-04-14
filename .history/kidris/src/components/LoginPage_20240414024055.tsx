const LoginPage = () => {
  return (
    <>
      <div className="app-title font-inika text-center pt-12 leading-10">
        <h1 className="text-[3rem]">KiDris</h1>
        <h2>made for small restaurants</h2>
      </div>
      <div className="app-login flex justify-center items-center mt-5">
        <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <i className="fas fa-user-circle"></i>
              </span>
            </div>
            <input
              type="text"
              className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
              placeholder="Password"
            />
            <div className="flex -mr-px">
              <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </div>
          <a
            href="/"
            className="bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-7"
          >
            Login
          </a>
        </form>
      </div>
      <div className="picture flex justify-center">
        <img src="src/assets/picture.png" className="h-[300px]"></img>
      </div>
    </>
  );
};

export default LoginPage;
