import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["loggedIn"]);

  const logout = () => {
    setCookie("loggedIn", false, { path: "/" });
    navigate("/login");
  };

  return (
    <button
      className="header-bar__logout h-[28px] w-[80px] bg-[#AF0505] text-white rounded-[12px]"
      onClick={logout}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
