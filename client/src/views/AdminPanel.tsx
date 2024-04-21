import UsersTable from "../components/UsersTable";

const AdminPanel = () => {
  return (
    <>
      <div className="header-container flex">
        <div className="header-bar flex justify-between bg-[#1E2020] w-full h-[110px] items-center">
          <div className="header-bar__title text-white text-[2.5rem] ml-7 mt-2 font-inter font-[500]">
            Admin Panel
          </div>
          <div className="header-bar__right__container flex mt-3 gap-3 mr-6 items-center">
            <div className="flex header-bar__circle h-[35px] w-[35px] bg-white rounded-[50%] text-center text-[25px] font-[500] justify-center items-center">
              U
            </div>
            <p className="header-bar__greeting text-white text-[22px] font-inter">
              Hi, user
            </p>
            <button className="header-bar__logout h-[28px] w-[80px] bg-[#AF0505] text-white rounded-[12px]">
              Log out
            </button>
          </div>
        </div>
      </div>

      <div className="flex mt-6 ml-2 bg-green-600 justify-center w-[80px] h-[40px] rounded-[6px] text-white font-inter font-[500]">
        <button>Add user</button>
      </div>

      <UsersTable />
    </>
  );
};

export default AdminPanel;
