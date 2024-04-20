const AdminPanel = () => {
  return (
    <>
      <div className="header-container flex mt-14">
        <div className="header-bar flex justify-between bg-[#1E2020] w-full h-[110px]">
          <div className="header-bar__title text-white text-[2.5rem] ml-7 mt-2 font-inter font-[500]">
            Admin Panel
          </div>
          <div className="header-bar__right__container flex mt-3 gap-3 mr-6">
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
            <tr className="odd:bg-white odd:dark:bg-[#1E2020] even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                jsmith
              </th>
              <td className="px-6 py-4">Driver</td>
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
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-[#1e2020e0] border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                kwilson
              </th>
              <td className="px-6 py-4">Driver</td>
              <td className="px-6 py-4 text-red-700 font-[600]">OFFLINE</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPanel;
