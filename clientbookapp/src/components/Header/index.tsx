import { useProvider } from "@/contexts/authContext";
import { destroyCookie } from "nookies";
import { HeaderS } from "./style";

export default function Header() {
  const { user, setLogin } = useProvider();

  const handleLogout = () => {
    destroyCookie(null, "ClientBookToken", { path: "/" });
    setLogin("2");
  };

  return (
    <HeaderS>
      <div>
        <div>
          <h1>Client Book</h1>
          <h4>
            <strong>Cliente:</strong> {user?.name}
          </h4>
          <p>
            <strong>E-mail: </strong> {user?.email}
          </p>
          <p>
            <strong>Número de telefone:</strong> {user?.phone}
          </p>
          {!!user?.secondEmail && (
            <p>
              <strong>E-mail secundário: </strong> {user?.secondEmail}
            </p>
          )}
          {!!user?.secondPhone && (
            <p>
              <strong>Telefone secundário: </strong>
              {user?.secondPhone}
            </p>
          )}
        </div>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </HeaderS>
  );
}
