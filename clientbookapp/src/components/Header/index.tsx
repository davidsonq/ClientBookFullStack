import { useProvider } from "@/contexts/authContext";
import { useRouter } from "next/router";
import nookies from "nookies";
import { HeaderS } from "./style";

export default function Header() {
  const { user } = useProvider();
  const router = useRouter();

  const handleLogout = () => {
    nookies.destroy(null, "ClientBookToken", { path: "/" });
    router.push("/");
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
