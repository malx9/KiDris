const UserTable = () => {
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
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
