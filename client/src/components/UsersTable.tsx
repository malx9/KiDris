import { useEffect, useState } from "react";
import Axios from "axios";

interface UserData {
  user_id: number;
  username: string;
  role: string;
  admin: number;
}

const UserTable = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (user: UserData) => {
    setSelectedUser(user);
    toggleModal();
  };

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/admin");
      console.log(response.data);
      setUserData(response.data.users);
    } catch (err) {
      console.error("Error fetching users data:", err);
    }
  };

  const deleteUser = async (userId: number) => {
    try {
      await Axios.delete(`http://localhost:3001/admin/delete/${userId}`);
      setUserData(userData.filter((user) => user.user_id !== userId));
      console.log("Successfully deleted the user");
    } catch (err) {
      console.error("Failed to delete the user", err);
    }
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    userId: number | undefined
  ) => {
    e.preventDefault();

    if (userId === undefined) {
      console.error("User ID is undefined");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    try {
      await Axios.put(`http://192.168.1.65:3001/admin/edit/${userId}`, {
        username,
        password,
        role,
      });
      toggleModal();
    } catch (error) {
      console.error("Error editing user", error);
    }
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md mt-6">
        <table className="w-full text-[1.0625rem] text-left rtl:text-right text-gray-500 dark:text-gray-200 font-inter">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#1e2020af] dark:text-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3">
                USER
              </th>
              <th scope="col" className="px-6 py-3">
                ROLE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr
                key={user.user_id}
                className="odd:bg-white odd:dark:bg-[#1E2020] even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user.username}
                </th>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4 text-green-600 font-[600]">ONLINE</td>
                <td className="flex flex-row px-3 py-4">
                  <div className="flex flex-row gap-3">
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-[#b36029] w-[60px] text-white rounded-[12px] text-[13px]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.user_id)}
                      className="bg-[#AF0505] w-[60px] h-[28px] text-white rounded-[12px] text-[13px]"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT USER MODAL  */}

      <div
        className={`fixed inset-0 overflow-y-auto ${
          modal ? "block" : "hidden"
        }`}
      >
        <form onSubmit={(e) => handleFormSubmit(e, selectedUser?.user_id)}>
          <div className="flex items-center justify-center min-h-screen font-inter">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="z-50 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <div className="container flex justify-between items-center">
                <div className="text-lg font-semibold mb-4">
                  <p>EDIT THE USER</p>
                </div>
                <button
                  className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded focus:outline-none"
                  onClick={toggleModal}
                >
                  X
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="add-username">Change Username</label>
                <input
                  type="text"
                  name="username"
                  defaultValue={selectedUser ? selectedUser.username : ""}
                  className="add-username rounded-[3px] h-[45px] border-[2px] focus:outline-none focus:border-[2px] focus:border-[#72008f4f] transition border-opacity-0 focus:border-opacity-100 pl-3 text-[16px] font-[500] caret-[#73008F]"
                ></input>
                <label htmlFor="change-password">Change Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="passwordInput"
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
                  Change Role
                </label>
                <select
                  id="rolesSelect"
                  name="role"
                  defaultValue={selectedUser ? selectedUser.role : ""}
                  className="w-full px-3 py-2 border-[2px] rounded-[3px] text-gray-700 focus:outline-none focus:border-[#72008f4f]"
                >
                  <option value="Admin">Admin</option>
                  <option value="Driver">Driver</option>
                  <option value="Kitchen">Kitchen</option>
                </select>

                <button
                  type="submit"
                  className="mt-4 w-[150px] bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserTable;
