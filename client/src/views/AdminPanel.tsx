import { useState } from "react";
import UsersTable from "../components/UsersTable";

const AdminPanel = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        <button onClick={toggleModal} className="btn-adduser-modal">
          Add user
        </button>
      </div>
      <UsersTable />

      <div
        className={`fixed inset-0 overflow-y-auto ${
          modal ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-h-screen font-inter">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-50 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="container flex justify-between items-center">
              <div className="text-lg font-semibold mb-4">
                <p>ADD A NEW USER</p>
              </div>
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded focus:outline-none"
                onClick={toggleModal}
              >
                X
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="add-username">Username</label>
              <input
                type="text"
                className="add-username rounded-[3px] h-[45px] border-[2px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] transition border-opacity-0 focus:border-opacity-100 pl-3 text-[16px] font-[500] caret-[#73008F]"
              ></input>
              <label htmlFor="add-password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="add-password rounded-[3px] h-[45px] border-[2px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] transition border-opacity-0 focus:border-opacity-100 pl-10 text-[16px] font-[500] caret-[#73008F]"
              ></input>
              <i
                className="far fa-eye absolute float-left mt-[134px] ml-3 text-[14px] cursor-pointer"
                id="togglePassword"
                onClick={togglePasswordVisibility}
              ></i>
              <label
                htmlFor="roles"
                className="block mb-1 font-medium text-gray-700"
              >
                Role:
              </label>
              <select
                id="roles"
                name="Roles"
                className="w-full px-3 py-2 border-[2px] rounded-[3px] text-gray-700 focus:outline-none focus:border-[#72008f4f]"
              >
                <option value="Admin">Admin</option>
                <option value="Driver">Driver</option>
                <option value="Kitchen">Kitchen</option>
              </select>

              <button className="mt-4 w-[150px] bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
