import axios from "axios";
import { Link } from "react-router-dom";

const SuiviItem = ({ suivi }) => {
  const handleDelete = async () => {
    return await axios.delete("http://localhost:8080/api/suivis/1" + suivi?.id);
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 text-gray-800">
              #{suivi?.titre}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {suivi?.sommeil}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{suivi?.stress}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {suivi?.fatigue}
      </td>
      {/* <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {suivi?.joie}
      </td> */}
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {suivi?.tristesse}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
        <div className="flex items-center justify-center gap-2">
          <Link to={"/edit-suivi/" + suivi?.id}>
            <span className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
              Edit
            </span>
          </Link>

          <button
            onClick={handleDelete}
            className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default SuiviItem;
