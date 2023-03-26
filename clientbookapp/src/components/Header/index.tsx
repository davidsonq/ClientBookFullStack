import { useProvider } from "@/contexts/authContext";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function Header() {
  const { user } = useProvider();
  const router = useRouter();

  const handleLogout = () => {
    nookies.destroy(null, "ClientBookToken", { path: "/" });
    router.push("/");
  };

  return (
    <header>
      <div>
        <div>
          <h1>Client Book</h1>
          <h4>Cliente: {user?.name}</h4>
          <p>E-mail: {user?.email}</p>
          <p>Número de telefone: {user?.phone}</p>
          {!!user?.secondEmail && (
            <p> E-mail secundário: {user?.secondEmail}</p>
          )}
          {!!user?.secondPhone && <p>Telefone secundário{user?.secondPhone}</p>}
        </div>
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}
