import { useEffect, useState } from "react";
import Axios from "axios";

interface UserData {
  id: number;
  username: string;
  role: string;
}

const UserTable = () => {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/admin");
      setUserData(response.data);
    } catch (err) {
      console.error("Error fetching users data:", err);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md mt-6">
      <table className="w-full text-[1.0625rem] text-left rtl:text-right text-gray-500 dark:text-gray-200">
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
              key={user.id}
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
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
