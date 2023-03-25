import { useProvider } from "@/contexts/authContext";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function Header() {
  const { user, setLogin } = useProvider();

  const handleLogout = () => {
    nookies.destroy(null, "ClientBookToken", { path: "/" });
    setLogin(false);
  };

  return (
    <header>
      <div>
        <div>
          <h1>Client Book</h1>
          <h4>{user?.name}</h4>
        </div>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}
