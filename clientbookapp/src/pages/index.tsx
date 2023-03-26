import FormLogin from "@/components/FormLogin";
import HeadComponent from "@/components/Head";
import { Main } from "@/styles/MainLogin";

export default function Login() {
  return (
    <>
      <HeadComponent />
      <Main>
        <FormLogin />
      </Main>
    </>
  );
}
